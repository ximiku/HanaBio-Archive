"""Deployment preflight and generated-site audits."""

from __future__ import annotations

import argparse
from html.parser import HTMLParser
from pathlib import Path
import sys

from .metadata import (
    GitRepository,
    ROOT,
    SiteMetadataError,
    is_public_build,
    load_events,
)


class MetadataHTMLParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.ids: set[str] = set()
        self.page_revisions: list[dict[str, str]] = []
        self.site_revisions: list[dict[str, str]] = []
        self.milestones: list[dict[str, str]] = []
        self.timeline_items: list[dict[str, str]] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = {key: value or "" for key, value in attrs}
        if values.get("id"):
            self.ids.add(values["id"])
        classes = set(values.get("class", "").split())
        # Count the native source-file element as well, so the audit keeps
        # working when Zensical eventually provides revision dates itself.
        if "md-source-file" in classes:
            self.page_revisions.append(values)
        if "hb-site-revision" in classes:
            self.site_revisions.append(values)
        if "hb-milestone" in classes:
            self.milestones.append(values)
        if "hb-timeline__item" in classes:
            self.timeline_items.append(values)


def _zensical_template_root() -> Path:
    try:
        import zensical
    except ImportError as exc:
        raise SiteMetadataError("未安装 Zensical，无法执行模板契约检查") from exc
    return Path(zensical.__file__).resolve().parent / "templates"


def check_template_contract() -> None:
    template_root = _zensical_template_root()
    required = {
        "base.html": "{% block content %}",
        "partials/content.html": 'partials/source-file.html',
        "partials/footer.html": 'partials/copyright.html',
        "partials/source-file.html": "md-source-file",
        "partials/copyright.html": "md-copyright",
    }
    for relative, needle in required.items():
        path = template_root / relative
        if not path.is_file() or needle not in path.read_text(encoding="utf-8"):
            raise SiteMetadataError(f"Zensical 模板契约不兼容：{relative}")


def preflight() -> None:
    check_template_contract()
    events = load_events(ROOT / "site-events.yml")
    repository = GitRepository(ROOT)
    public = is_public_build()
    if public:
        repository.validate_public_head()
    else:
        repository.ensure_complete_history()
        repository.head()

    markdown_files = sorted((ROOT / "docs").rglob("*.md"))
    source_paths = [path.relative_to(ROOT).as_posix() for path in markdown_files]
    revisions = repository.revisions_for(source_paths)
    missing = [source_path for source_path in source_paths if source_path not in revisions]
    if missing and public:
        raise SiteMetadataError(
            "发布页面缺少 Git 历史：" + ", ".join(missing[:10])
        )
    print(
        f"Preflight passed: {len(markdown_files)} Markdown files, "
        f"{len(events)} site events, mode={'public' if public else 'local'}"
    )


def _parse_html(path: Path) -> MetadataHTMLParser:
    parser = MetadataHTMLParser()
    parser.feed(path.read_text(encoding="utf-8"))
    return parser


def audit_site(site_dir: Path) -> None:
    site_dir = site_dir.resolve()
    if not site_dir.is_dir():
        raise SiteMetadataError(f"找不到构建目录：{site_dir}")
    repository = GitRepository(ROOT)
    public = is_public_build()
    head = repository.validate_public_head() if public else repository.head()
    events = load_events(ROOT / "site-events.yml")
    markdown_count = len(list((ROOT / "docs").rglob("*.md")))

    page_records: list[tuple[Path, dict[str, str]]] = []
    footer_count = 0
    for html_path in sorted(site_dir.rglob("*.html")):
        raw = html_path.read_text(encoding="utf-8")
        if "[[site-events:" in raw or "updates-box" in raw or "js/updates.js" in raw:
            raise SiteMetadataError(f"构建产物仍含旧公告或未渲染标记：{html_path}")
        parsed = _parse_html(html_path)
        if parsed.page_revisions:
            if len(parsed.page_revisions) != 1:
                raise SiteMetadataError(f"页面修订标记数量错误：{html_path}")
            if len(parsed.site_revisions) != 1:
                raise SiteMetadataError(f"站点版本标记数量错误：{html_path}")
            page_records.append((html_path, parsed.page_revisions[0]))
            footer = parsed.site_revisions[0]
            footer_count += 1
            if public:
                if footer.get("data-mode") != "public" or footer.get("data-commit") != head.commit:
                    raise SiteMetadataError(f"页脚公开 SHA 不匹配：{html_path}")
            elif footer.get("data-mode") != "local" or footer.get("data-commit"):
                raise SiteMetadataError(f"本地页脚泄露或错误标记 SHA：{html_path}")

    if len(page_records) != markdown_count:
        raise SiteMetadataError(
            f"页面修订标记覆盖不完整：期望 {markdown_count}，实际 {len(page_records)}"
        )
    if footer_count != markdown_count:
        raise SiteMetadataError("并非每个内容页都恰有一个站点版本标记")

    source_paths = [
        record.get("data-source-path", "")
        for _, record in page_records
        if record.get("data-source-path")
    ]
    revisions = repository.revisions_for(source_paths)
    for html_path, record in page_records:
        source_path = record.get("data-source-path", "")
        if not source_path:
            # A future native Zensical marker does not carry our audit-only
            # source attribute. Its presence is still covered by the template
            # contract and the public preflight's complete Git-history check.
            continue
        revision = revisions.get(source_path)
        if revision is None:
            if public:
                raise SiteMetadataError(f"发布页面没有 Git 历史：{source_path}")
            continue
        if record.get("data-revision-date") != revision.display_date:
            raise SiteMetadataError(f"页面时间与 git log 不一致：{html_path}")

    homepage = _parse_html(site_dir / "index.html")
    if len(homepage.milestones) != 1:
        raise SiteMetadataError("首页必须恰有一个近期里程碑")
    if "site-events" not in homepage.ids:
        raise SiteMetadataError("首页缺少站点纪事锚点")
    if len(homepage.timeline_items) != len(events):
        raise SiteMetadataError("首页重大事件与站点纪事数量不一致")

    print(
        f"Site audit passed: {len(page_records)} pages, {footer_count} footers, "
        f"{len(events)} site events"
    )


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser()
    subparsers = parser.add_subparsers(dest="command", required=True)
    subparsers.add_parser("preflight")
    audit_parser = subparsers.add_parser("audit")
    audit_parser.add_argument("--site-dir", default="site", type=Path)
    args = parser.parse_args(argv)
    try:
        if args.command == "preflight":
            preflight()
        else:
            audit_site(args.site_dir)
    except SiteMetadataError as exc:
        print(f"Metadata check failed: {exc}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
