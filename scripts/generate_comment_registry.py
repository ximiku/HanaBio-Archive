#!/usr/bin/env python3
"""Bootstrap and validate HanaBio's immutable comment page IDs."""

from __future__ import annotations

import argparse
import hashlib
from pathlib import Path
import re
import sys

import yaml


ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
REGISTRY = ROOT / "includes" / "hanabio_site" / "comment-pages.yml"


def page_id_for(source_path: str, used: set[str]) -> str:
    relative = source_path.removeprefix("docs/").removesuffix(".md")
    if relative == "index":
        candidate = "hb-home"
    else:
        if relative.endswith("/index"):
            relative = relative.removesuffix("/index")
        slug = re.sub(r"[^a-z0-9]+", "-", relative.lower()).strip("-")
        candidate = f"hb-{slug}"
    if candidate not in used:
        return candidate
    suffix = hashlib.sha256(source_path.encode("utf-8")).hexdigest()[:8]
    return f"{candidate}-{suffix}"


def markdown_paths() -> list[str]:
    return sorted(path.relative_to(ROOT).as_posix() for path in DOCS.rglob("*.md"))


def bootstrap() -> None:
    if REGISTRY.exists():
        raise SystemExit(f"Refusing to overwrite existing registry: {REGISTRY}")
    used: set[str] = set()
    pages: dict[str, str] = {}
    for source_path in markdown_paths():
        page_id = page_id_for(source_path, used)
        used.add(page_id)
        pages[source_path] = page_id
    REGISTRY.parent.mkdir(parents=True, exist_ok=True)
    REGISTRY.write_text(
        yaml.safe_dump(
            {"version": 1, "pages": pages, "tombstones": []},
            allow_unicode=True,
            sort_keys=False,
        ),
        encoding="utf-8",
    )
    print(f"Created {REGISTRY.relative_to(ROOT)} with {len(pages)} stable IDs")


def move(old_path: str, new_path: str) -> None:
    raw = yaml.safe_load(REGISTRY.read_text(encoding="utf-8"))
    pages = raw["pages"]
    if old_path not in pages:
        raise SystemExit(f"Unknown source path: {old_path}")
    if new_path in pages:
        raise SystemExit(f"Target path already registered: {new_path}")
    page_id = pages.pop(old_path)
    raw["pages"] = dict(sorted({**pages, new_path: page_id}.items()))
    REGISTRY.write_text(
        yaml.safe_dump(raw, allow_unicode=True, sort_keys=False), encoding="utf-8"
    )
    print(f"Moved {page_id}: {old_path} -> {new_path}")


def retire(source_path: str) -> None:
    raw = yaml.safe_load(REGISTRY.read_text(encoding="utf-8"))
    try:
        page_id = raw["pages"].pop(source_path)
    except KeyError as exc:
        raise SystemExit(f"Unknown source path: {source_path}") from exc
    raw.setdefault("tombstones", []).append(page_id)
    raw["tombstones"] = sorted(set(raw["tombstones"]))
    REGISTRY.write_text(
        yaml.safe_dump(raw, allow_unicode=True, sort_keys=False), encoding="utf-8"
    )
    print(f"Retired {source_path} as {page_id}")


def check() -> None:
    sys.path.insert(0, str(ROOT))
    from hanabio_site.comments import load_comment_registry, validate_comment_registry

    registry = load_comment_registry()
    validate_comment_registry(registry)
    print(f"Comment registry passed: {len(registry.pages)} active IDs")


def main() -> None:
    parser = argparse.ArgumentParser()
    actions = parser.add_mutually_exclusive_group()
    actions.add_argument("--bootstrap", action="store_true")
    actions.add_argument("--move", nargs=2, metavar=("OLD", "NEW"))
    actions.add_argument("--retire", metavar="SOURCE_PATH")
    args = parser.parse_args()
    if args.bootstrap:
        bootstrap()
    elif args.move:
        move(*args.move)
    elif args.retire:
        retire(args.retire)
    else:
        check()


if __name__ == "__main__":
    main()
