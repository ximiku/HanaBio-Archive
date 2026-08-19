#!/usr/bin/env python3
"""Build a non-destructive paragraph-comment migration payload."""

from __future__ import annotations

import argparse
from dataclasses import dataclass
from difflib import SequenceMatcher
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import subprocess
import sys
from typing import Any

import markdown
import yaml


ROOT = Path(__file__).resolve().parent.parent
REGISTRY_PATH = "includes/hanabio_site/comment-pages.yml"
sys.path.insert(0, str(ROOT))

from hanabio_site.comments import CommentOffsetsExtension  # noqa: E402


@dataclass(frozen=True)
class Anchor:
    tag: str
    start: int
    end: int
    fingerprint: str
    quote: str

    def as_api(self) -> dict[str, Any]:
        return {
            "start": self.start,
            "end": self.end,
            "fingerprint": self.fingerprint,
            "quote": self.quote[:1000],
        }


class AnchorParser(HTMLParser):
    def __init__(self, source: str):
        super().__init__()
        self.source = source
        self.anchors: list[Anchor] = []
        self.seen: set[tuple[str, int, int, str]] = set()

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = {key: value or "" for key, value in attrs}
        if values.get("data-hanabio-comments") != "block":
            return
        try:
            start = int(values["data-block-start"])
            end = int(values["data-block-end"])
            fingerprint = values["data-block-fingerprint"]
        except (KeyError, ValueError):
            return
        key = (tag, start, end, fingerprint)
        if key in self.seen:
            return
        self.seen.add(key)
        raw = self.source[start:end]
        quote = re.sub(r"\s+", " ", raw).strip()
        self.anchors.append(Anchor(tag, start, end, fingerprint, quote))


def extract_anchors(source: str, page_id: str, revision: str) -> list[Anchor]:
    rendered = markdown.markdown(
        source,
        extensions=[
            CommentOffsetsExtension(
                page_id=page_id,
                source_path="migration.md",
                build_revision=revision or "local",
            ),
            "abbr",
            "attr_list",
            "admonition",
            "def_list",
            "footnotes",
            "tables",
            "pymdownx.details",
            "pymdownx.superfences",
        ],
    )
    parser = AnchorParser(source)
    parser.feed(rendered)
    return parser.anchors


def _normalized(value: str) -> str:
    return " ".join(value.split()).casefold()


def map_anchors(old: list[Anchor], new: list[Anchor]) -> list[dict[str, Any]]:
    """Map confidently matching blocks and explicitly orphan every ambiguity."""
    new_by_fingerprint: dict[str, list[Anchor]] = {}
    for anchor in new:
        new_by_fingerprint.setdefault(anchor.fingerprint, []).append(anchor)
    used: set[tuple[int, int, str]] = set()
    mappings: list[dict[str, Any]] = []
    for previous in old:
        selected: Anchor | None = None
        exact = [
            anchor
            for anchor in new_by_fingerprint.get(previous.fingerprint, [])
            if (anchor.start, anchor.end, anchor.fingerprint) not in used
        ]
        if len(exact) == 1:
            selected = exact[0]
        else:
            scored: list[tuple[float, Anchor]] = []
            previous_text = _normalized(previous.quote)
            for candidate in new:
                if candidate.tag != previous.tag:
                    continue
                if (candidate.start, candidate.end, candidate.fingerprint) in used:
                    continue
                score = SequenceMatcher(
                    None, previous_text, _normalized(candidate.quote)
                ).ratio()
                scored.append((score, candidate))
            scored.sort(key=lambda item: item[0], reverse=True)
            if scored:
                best_score, best = scored[0]
                runner_up = scored[1][0] if len(scored) > 1 else 0.0
                if best_score >= 0.82 and best_score - runner_up >= 0.08:
                    selected = best

        if selected is None:
            mappings.append(
                {
                    "from_fingerprint": previous.fingerprint,
                    "status": "orphaned",
                    "to": None,
                }
            )
        else:
            used.add((selected.start, selected.end, selected.fingerprint))
            mappings.append(
                {
                    "from_fingerprint": previous.fingerprint,
                    "status": "active",
                    "to": selected.as_api(),
                }
            )
    return mappings


def git(*args: str, allow_failure: bool = False) -> str | None:
    process = subprocess.run(
        ("git", *args),
        cwd=ROOT,
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    if process.returncode and allow_failure:
        return None
    if process.returncode:
        raise RuntimeError(process.stderr.strip() or "git command failed")
    return process.stdout


def read_ref(ref: str, source_path: str) -> str | None:
    if ref == "WORKTREE":
        path = ROOT / source_path
        return path.read_text(encoding="utf-8") if path.is_file() else None
    if not ref:
        return None
    return git("show", f"{ref}:{source_path}", allow_failure=True)


def registry_for(ref: str) -> dict[str, str]:
    raw = read_ref(ref, REGISTRY_PATH)
    if raw is None:
        return {}
    parsed = yaml.safe_load(raw)
    return dict(parsed.get("pages", {}))


def route_for(source_path: str) -> str:
    relative = source_path.removeprefix("docs/").removesuffix(".md")
    if relative == "index":
        return "/"
    if relative.endswith("/index"):
        relative = relative.removesuffix("/index")
    return f"/{relative}/"


def title_for(source: str, source_path: str) -> str:
    match = re.search(r"^#\s+(.+?)\s*$", source, re.MULTILINE)
    if not match:
        return Path(source_path).stem
    return re.sub(r"\s+\{#[^}]+\}\s*$", "", match.group(1)).strip()


def build_payload(from_ref: str, to_ref: str, revision: str) -> dict[str, Any]:
    current_registry = registry_for(to_ref)
    if not current_registry:
        raise RuntimeError("current revision does not contain the comment page registry")
    old_registry = registry_for(from_ref)
    if from_ref and not old_registry:
        raise RuntimeError(
            f"published revision {from_ref} is unavailable or has no comment registry; "
            "refusing an unsafe migration"
        )
    old_path_by_id = {page_id: path for path, page_id in old_registry.items()}

    pages: list[dict[str, str]] = []
    mappings: list[dict[str, Any]] = []
    for source_path, page_id in current_registry.items():
        current_source = read_ref(to_ref, source_path)
        if current_source is None:
            raise RuntimeError(f"registered page is missing: {source_path}")
        pages.append(
            {
                "page_id": page_id,
                "path": route_for(source_path),
                "title": title_for(current_source, source_path),
            }
        )
        if not from_ref:
            continue
        old_path = old_path_by_id.get(page_id, source_path)
        previous_source = read_ref(from_ref, old_path)
        if previous_source is None or previous_source == current_source:
            continue
        old_anchors = extract_anchors(previous_source, page_id, from_ref)
        new_anchors = extract_anchors(current_source, page_id, revision)
        for mapping in map_anchors(old_anchors, new_anchors):
            mappings.append({"page_id": page_id, **mapping})

    return {
        "from_revision": from_ref or "",
        "revision": revision,
        "pages": pages,
        "mappings": mappings,
    }


def resolve_revision(ref: str) -> str:
    if ref == "WORKTREE":
        value = git("rev-parse", "HEAD")
    else:
        value = git("rev-parse", ref)
    assert value is not None
    return value.strip()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--from-ref", default="")
    parser.add_argument("--to-ref", default="WORKTREE")
    parser.add_argument("--revision", help="Published 40-character revision; defaults to to-ref")
    parser.add_argument("--output", required=True, type=Path)
    args = parser.parse_args()
    revision = args.revision or resolve_revision(args.to_ref)
    payload = build_payload(args.from_ref, args.to_ref, revision)
    args.output.write_text(
        json.dumps(payload, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    print(
        f"Comment migration prepared: {len(payload['pages'])} pages, "
        f"{len(payload['mappings'])} changed anchors"
    )


if __name__ == "__main__":
    main()
