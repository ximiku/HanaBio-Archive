"""Stable page identities and Markdown source offsets for HanaBio comments.

The offset-injection algorithm is derived from OI Wiki Feedback System's
``python-markdown-document-offsets-injection-extension`` (Apache-2.0).  HanaBio
adds stable page IDs, per-document state, fingerprints, and build revisions.
See ``THIRD_PARTY_NOTICES.md``.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from difflib import SequenceMatcher
import hashlib
import os
from pathlib import Path
import re
from typing import Any
import xml.etree.ElementTree as etree

import yaml
from markdown import Extension, Markdown
from markdown.blockparser import BlockParser
from markdown.blockprocessors import BlockProcessor
from markdown.preprocessors import Preprocessor

from .metadata import CACHE, ROOT, SiteMetadataError, is_public_build


REGISTRY_PATH = ROOT / "includes" / "hanabio_site" / "comment-pages.yml"
PAGE_ID_PATTERN = re.compile(r"hb-[a-z0-9]+(?:-[a-z0-9]+)*\Z")
ELIGIBLE_TAGS = {
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "ul",
    "ol",
    "pre",
    "blockquote",
    "table",
    "figure",
    "div",
    "details",
}


@dataclass(frozen=True)
class CommentPageRegistry:
    pages: dict[str, str]
    tombstones: frozenset[str]

    def page_id(self, source_path: str) -> str:
        try:
            return self.pages[source_path]
        except KeyError as exc:
            raise SiteMetadataError(
                f"评论页面注册表缺少 {source_path}；请先分配稳定页面 ID"
            ) from exc


def load_comment_registry(path: Path = REGISTRY_PATH) -> CommentPageRegistry:
    try:
        raw = yaml.safe_load(path.read_text(encoding="utf-8"))
    except FileNotFoundError as exc:
        raise SiteMetadataError(f"找不到评论页面注册表：{path}") from exc
    except yaml.YAMLError as exc:
        raise SiteMetadataError(f"评论页面注册表无法解析：{exc}") from exc

    if not isinstance(raw, dict) or raw.get("version") != 1:
        raise SiteMetadataError("评论页面注册表 version 必须为 1")
    if set(raw) - {"version", "pages", "tombstones"}:
        raise SiteMetadataError("评论页面注册表包含未知顶层字段")

    pages = raw.get("pages")
    tombstones = raw.get("tombstones", [])
    if not isinstance(pages, dict) or not pages:
        raise SiteMetadataError("评论页面注册表 pages 必须是非空映射")
    if not isinstance(tombstones, list):
        raise SiteMetadataError("评论页面注册表 tombstones 必须是列表")

    normalized: dict[str, str] = {}
    seen_ids: set[str] = set()
    for source_path, page_id in pages.items():
        if not isinstance(source_path, str) or not source_path.startswith("docs/"):
            raise SiteMetadataError("评论页面路径必须以 docs/ 开头")
        if not isinstance(page_id, str) or not PAGE_ID_PATTERN.fullmatch(page_id):
            raise SiteMetadataError(f"评论页面 ID 非法：{page_id!r}")
        if page_id in seen_ids:
            raise SiteMetadataError(f"评论页面 ID 重复：{page_id}")
        seen_ids.add(page_id)
        normalized[source_path] = page_id

    tombstone_ids = frozenset(tombstones)
    if len(tombstone_ids) != len(tombstones):
        raise SiteMetadataError("评论页面 tombstone 重复")
    for page_id in tombstone_ids:
        if not isinstance(page_id, str) or not PAGE_ID_PATTERN.fullmatch(page_id):
            raise SiteMetadataError(f"评论页面 tombstone 非法：{page_id!r}")
        if page_id in seen_ids:
            raise SiteMetadataError(f"活动页面 ID 同时出现在 tombstone：{page_id}")

    return CommentPageRegistry(normalized, tombstone_ids)


def validate_comment_registry(
    registry: CommentPageRegistry | None = None,
    *,
    docs_root: Path | None = None,
) -> None:
    registry = registry or load_comment_registry()
    docs_root = docs_root or ROOT / "docs"
    actual = {
        path.relative_to(ROOT).as_posix()
        for path in docs_root.rglob("*.md")
    }
    registered = set(registry.pages)
    missing = sorted(actual - registered)
    stale = sorted(registered - actual)
    if missing:
        raise SiteMetadataError(
            "评论页面注册表缺少 Markdown：" + ", ".join(missing[:10])
        )
    if stale:
        raise SiteMetadataError(
            "评论页面注册表仍引用不存在的 Markdown：" + ", ".join(stale[:10])
        )


def comment_runtime_config(environ: dict[str, str] | None = None) -> dict[str, Any]:
    """Return public, build-time comment configuration from environment variables."""
    env = os.environ if environ is None else environ
    api_url = env.get("HANABIO_COMMENT_API_URL", "").strip().rstrip("/")
    turnstile_site_key = env.get("HANABIO_TURNSTILE_SITE_KEY", "").strip()
    repo_id = env.get("HANABIO_GISCUS_REPO_ID", "").strip()
    category_id = env.get("HANABIO_GISCUS_CATEGORY_ID", "").strip()
    category = env.get("HANABIO_GISCUS_CATEGORY", "页面评论").strip()
    paragraph_enabled = bool(api_url and turnstile_site_key)
    giscus_enabled = bool(repo_id and category_id and category)
    required = env.get("HANABIO_COMMENTS_REQUIRED", "").lower() in {
        "1",
        "true",
        "yes",
    }
    if required and not (paragraph_enabled and giscus_enabled):
        raise SiteMetadataError(
            "已要求启用评论，但 HANABIO_COMMENT_API_URL、Turnstile 或 giscus 公共配置不完整"
        )
    return {
        "paragraph_enabled": paragraph_enabled,
        "api_url": api_url,
        "turnstile_site_key": turnstile_site_key,
        "giscus_enabled": giscus_enabled,
        "giscus_repo": "ximiku/HanaBio-Archive",
        "giscus_repo_id": repo_id,
        "giscus_category": category,
        "giscus_category_id": category_id,
    }


@dataclass
class DocumentState:
    original_lines: list[str] = field(default_factory=list)
    original_offsets: list[tuple[str, int, int]] = field(default_factory=list)
    preprocessed_lines: list[str] = field(default_factory=list)
    restore_opcodes: list[tuple[str, int, int, int, int]] = field(default_factory=list)
    last_processed_line_idx: int = -1
    in_prerender: bool = False
    page_id: str = ""
    source_path: str = ""
    build_revision: str = "local"
    current_heading: str = ""

    @property
    def original_document(self) -> str:
        return "\n".join(self.original_lines)


class CaptureDocumentPreprocessor(Preprocessor):
    def __init__(self, md: Markdown, state: DocumentState):
        super().__init__(md)
        self.state = state

    def run(self, lines: list[str]) -> list[str]:
        self.state.original_lines = list(lines)
        self.state.original_offsets = []
        self.state.restore_opcodes = []
        self.state.last_processed_line_idx = -1
        self.state.in_prerender = False
        self.state.current_heading = ""
        offset = 0
        for line in lines:
            self.state.original_offsets.append((line, offset, offset + len(line)))
            offset += len(line) + 1
        return lines


class PrepareCommentsPreprocessor(Preprocessor):
    def __init__(
        self,
        md: Markdown,
        state: DocumentState,
        *,
        configured_page_id: str,
        configured_source_path: str,
        configured_revision: str,
    ):
        super().__init__(md)
        self.state = state
        self.configured_page_id = configured_page_id
        self.configured_source_path = configured_source_path
        self.configured_revision = configured_revision

    def run(self, lines: list[str]) -> list[str]:
        self.state.preprocessed_lines = list(lines)
        matcher = SequenceMatcher(
            lambda line: len(line) == 0,
            self.state.preprocessed_lines,
            self.state.original_lines,
        )
        self.state.restore_opcodes = list(matcher.get_opcodes())

        page_id = self.configured_page_id
        source_path = self.configured_source_path
        revision = self.configured_revision
        try:
            from zensical.extensions.context import ContextPreprocessor
        except ImportError:
            ContextPreprocessor = None  # type: ignore[assignment,misc]
        if ContextPreprocessor is not None:
            context = ContextPreprocessor.from_markdown(self.md)
            if context is not None:
                raw_path = Path(context.page.path)
                source_path = (
                    raw_path.as_posix()
                    if raw_path.parts and raw_path.parts[0] == "docs"
                    else (Path("docs") / raw_path).as_posix()
                )
                page_id = load_comment_registry().page_id(source_path)
                revision = CACHE.head.commit if is_public_build() else "local"
                context.page.meta["hanabio_comments"] = {
                    "page_id": page_id,
                    "source_path": source_path,
                    "build_revision": revision,
                    **comment_runtime_config(),
                }

        if not page_id or not PAGE_ID_PATTERN.fullmatch(page_id):
            raise SiteMetadataError("评论语义块注入缺少合法稳定页面 ID")
        self.state.page_id = page_id
        self.state.source_path = source_path
        self.state.build_revision = revision or "local"
        return lines


def _normalize_block(raw: str) -> str:
    return " ".join(raw.replace("\r\n", "\n").split())


def _fingerprint(state: DocumentState, raw: str) -> str:
    material = "\0".join(
        (state.page_id, state.current_heading, _normalize_block(raw))
    ).encode("utf-8")
    return hashlib.sha256(material).hexdigest()[:20]


def _eligible(element: etree.Element) -> bool:
    if element.tag not in ELIGIBLE_TAGS:
        return False
    classes = set(element.get("class", "").split())
    if {"footnote", "toclink", "headerlink"} & classes:
        return False
    return True


class CommentOffsetsBlockProcessor(BlockProcessor):
    def __init__(self, parser: BlockParser, state: DocumentState):
        super().__init__(parser)
        self.state = state

    def test(self, parent: etree.Element, block: str) -> bool:
        del parent
        if self.state.in_prerender:
            return False
        for index, line in enumerate(self.state.preprocessed_lines):
            if line and line in block and index > self.state.last_processed_line_idx:
                return True
        return False

    def _restore_line_range(self, start: int, end: int) -> tuple[int, int] | None:
        for tag, i1, i2, _j1, _j2 in self.state.restore_opcodes:
            if tag != "delete":
                continue
            if i1 <= start < i2:
                start = i2
            if i1 < end <= i2:
                end = i1
            if start >= end:
                return None

        restored_start = -1
        restored_end = -1
        for tag, i1, i2, j1, j2 in self.state.restore_opcodes:
            if tag == "replace":
                if i1 <= start < i2:
                    restored_start = j1
                if i1 < end <= i2:
                    restored_end = j2
            elif tag == "equal":
                if i1 <= start < i2:
                    restored_start = j1 + start - i1
                if i1 < end <= i2:
                    restored_end = j1 + end - i1
        if restored_start < 0 or restored_end < 0:
            return None
        return restored_start, restored_end

    def _annotate(self, child: etree.Element, offset_start: int, offset_end: int) -> None:
        if not _eligible(child):
            return
        raw = self.state.original_document[offset_start:offset_end]
        if child.tag in {"h1", "h2", "h3", "h4", "h5", "h6"}:
            self.state.current_heading = " ".join("".join(child.itertext()).split())
        child.set("data-hanabio-comments", "block")
        child.set("data-hanabio-page-id", self.state.page_id)
        child.set("data-block-start", str(offset_start))
        child.set("data-block-end", str(offset_end))
        child.set("data-block-fingerprint", _fingerprint(self.state, raw))
        child.set("data-build-revision", self.state.build_revision)

    def run(self, parent: etree.Element, blocks: list[str]) -> None:
        block = blocks[0]
        start = -1
        end = -1
        for index in range(
            self.state.last_processed_line_idx + 1,
            len(self.state.preprocessed_lines),
        ):
            line = self.state.preprocessed_lines[index]
            if not line:
                continue
            if line in block:
                if start == -1:
                    start = index
                end = index + 1
                self.state.last_processed_line_idx = index
            elif start != -1:
                break
        if start == -1:
            return

        self.state.in_prerender = True
        previous_len = len(parent)
        self.parser.parseBlocks(parent, [block])
        self.state.in_prerender = False
        parsed_len = len(parent)
        blocks.pop(0)

        restored = self._restore_line_range(start, end)
        if restored is None:
            return
        restored_start, restored_end = restored
        offset_start = self.state.original_offsets[restored_start][1]
        offset_end = self.state.original_offsets[restored_end - 1][2]

        if previous_len == parsed_len and parent:
            child = parent[-1]
            existing_start = child.get("data-block-start")
            if existing_start is None:
                self._annotate(child, offset_start, offset_end)
            else:
                child.set("data-block-end", str(offset_end))
            return
        for index in range(parsed_len - previous_len):
            self._annotate(parent[-1 - index], offset_start, offset_end)


class CommentOffsetsExtension(Extension):
    def __init__(self, **kwargs: Any):
        self.config = {
            "page_id": ["", "Stable page ID for standalone Markdown tests"],
            "source_path": ["", "Source path for standalone Markdown tests"],
            "build_revision": ["local", "Build revision for standalone tests"],
        }
        super().__init__(**kwargs)

    def extendMarkdown(self, md: Markdown) -> None:
        md.registerExtension(self)
        state = DocumentState()
        md.preprocessors.register(
            CaptureDocumentPreprocessor(md, state), "hanabio_capture_comments", 1000
        )
        md.preprocessors.register(
            PrepareCommentsPreprocessor(
                md,
                state,
                configured_page_id=self.getConfig("page_id"),
                configured_source_path=self.getConfig("source_path"),
                configured_revision=self.getConfig("build_revision"),
            ),
            "hanabio_prepare_comments",
            0,
        )
        md.parser.blockprocessors.register(
            CommentOffsetsBlockProcessor(md.parser, state),
            "hanabio_comment_offsets",
            200,
        )


def makeExtension(**kwargs: Any) -> CommentOffsetsExtension:
    return CommentOffsetsExtension(**kwargs)
