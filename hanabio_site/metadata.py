"""Inject reliable Git revisions and render structured site events."""

from __future__ import annotations

from dataclasses import dataclass
from datetime import date, datetime
from html import escape
from pathlib import Path
import os
import re
import subprocess
import threading
from typing import Any, Iterable
from urllib.parse import quote, urlsplit
from zoneinfo import ZoneInfo

import yaml
from markdown import Extension, Markdown
from markdown.preprocessors import Preprocessor


TIMEZONE = ZoneInfo("Asia/Shanghai")
PUBLIC_REPOSITORY = "ximiku/HanaBio-Archive"
PUBLIC_REPOSITORY_URL = "https://github.com/ximiku/HanaBio-Archive"
ID_PATTERN = re.compile(r"[a-z0-9]+(?:-[a-z0-9]+)*\Z")


class SiteMetadataError(RuntimeError):
    """Raised when build metadata cannot be produced safely."""


@dataclass(frozen=True)
class Revision:
    commit: str
    committed_at: datetime

    @property
    def local_datetime(self) -> datetime:
        return self.committed_at.astimezone(TIMEZONE)

    @property
    def iso(self) -> str:
        return self.local_datetime.isoformat(timespec="seconds")

    @property
    def display_date(self) -> str:
        return self.local_datetime.strftime("%Y-%m-%d")

    @property
    def display_datetime(self) -> str:
        return self.local_datetime.strftime("%Y-%m-%d %H:%M")


@dataclass(frozen=True)
class SiteEvent:
    id: str
    date: date
    title: str
    summary: str | None = None
    url: str | None = None


def is_public_build(environ: dict[str, str] | None = None) -> bool:
    env = os.environ if environ is None else environ
    if env.get("GITHUB_ACTIONS") != "true":
        return False
    repository = env.get("GITHUB_REPOSITORY")
    if repository != PUBLIC_REPOSITORY:
        raise SiteMetadataError(
            "GitHub Actions 仓库不匹配：拒绝为非公开发布仓库输出提交链接"
        )
    return True


def _parse_git_output(output: str, description: str) -> Revision:
    try:
        commit, timestamp = output.strip().split("\0", 1)
        committed_at = datetime.fromisoformat(timestamp)
    except (ValueError, TypeError) as exc:
        raise SiteMetadataError(f"无法解析 {description} 的 Git 时间") from exc
    if len(commit) != 40 or committed_at.tzinfo is None:
        raise SiteMetadataError(f"{description} 的 Git 元数据不完整")
    return Revision(commit=commit, committed_at=committed_at)


class GitRepository:
    """Read Git metadata without exposing local-only commit identifiers."""

    def __init__(self, root: Path):
        self.root = root.resolve()
        self._cached_head_log_path: Path | None = None
        self._head_log_path_resolved = False

    def _git(self, *args: str, allow_empty: bool = False) -> str:
        try:
            process = subprocess.run(
                ("git", *args),
                cwd=self.root,
                check=False,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True,
            )
        except FileNotFoundError as exc:
            raise SiteMetadataError("未找到 Git，无法生成可靠的更新时间") from exc
        if process.returncode != 0:
            detail = process.stderr.strip() or "未知 Git 错误"
            raise SiteMetadataError(f"读取 Git 元数据失败：{detail}")
        output = process.stdout.rstrip("\n")
        if not allow_empty and not output:
            raise SiteMetadataError("Git 未返回所需元数据")
        return output

    def head(self) -> Revision:
        return _parse_git_output(
            self._git("show", "-s", "--format=%H%x00%cI", "HEAD"), "HEAD"
        )

    def revision_for(self, source_path: str) -> Revision | None:
        output = self._git(
            "log", "-1", "--format=%H%x00%cI", "--", source_path, allow_empty=True
        )
        if not output:
            return None
        return _parse_git_output(output, source_path)

    def revisions_for(self, source_paths: Iterable[str]) -> dict[str, Revision]:
        """Read the newest revision for many paths with one Git process."""
        wanted = set(source_paths)
        if not wanted:
            return {}
        output = self._git(
            "-c",
            "core.quotePath=false",
            "log",
            "--format=%x1e%H%x00%cI",
            "--name-only",
            "--",
            *sorted(wanted),
            allow_empty=True,
        )
        revisions: dict[str, Revision] = {}
        for record in output.split("\x1e"):
            lines = record.strip("\n").splitlines()
            if not lines:
                continue
            revision = _parse_git_output(lines[0], "批量 Git 历史")
            for source_path in lines[1:]:
                source_path = source_path.strip()
                if source_path in wanted and source_path not in revisions:
                    revisions[source_path] = revision
            if len(revisions) == len(wanted):
                break
        return revisions

    def is_shallow(self) -> bool:
        return self._git("rev-parse", "--is-shallow-repository") == "true"

    def ensure_complete_history(self) -> None:
        if self.is_shallow():
            raise SiteMetadataError(
                "当前仓库是浅克隆，页面最近修改时间可能错误；请使用 fetch-depth: 0"
            )

    def validate_public_head(self, environ: dict[str, str] | None = None) -> Revision:
        env = os.environ if environ is None else environ
        self.ensure_complete_history()
        revision = self.head()
        expected = env.get("GITHUB_SHA", "")
        if not expected or revision.commit != expected:
            raise SiteMetadataError("HEAD 与 GITHUB_SHA 不一致，拒绝发布错误的站点版本")
        return revision

    def head_log_path(self) -> Path | None:
        if self._head_log_path_resolved:
            return self._cached_head_log_path
        try:
            raw = self._git("rev-parse", "--git-path", "logs/HEAD")
        except SiteMetadataError:
            self._head_log_path_resolved = True
            return None
        path = Path(raw)
        self._cached_head_log_path = path if path.is_absolute() else self.root / path
        self._head_log_path_resolved = True
        return self._cached_head_log_path


def _validate_event_url(value: Any, event_id: str) -> str | None:
    if value is None:
        return None
    if not isinstance(value, str) or not value.strip():
        raise SiteMetadataError(f"事件 {event_id} 的 url 必须是非空字符串")
    url = value.strip()
    parts = urlsplit(url)
    safe_https = parts.scheme == "https" and bool(parts.netloc)
    safe_root_relative = url.startswith("/") and not url.startswith("//")
    if not (safe_https or safe_root_relative):
        raise SiteMetadataError(
            f"事件 {event_id} 的 url 不安全；仅允许 https 或站内根相对路径"
        )
    return url


def load_events(path: Path, *, today: date | None = None) -> list[SiteEvent]:
    try:
        raw = yaml.safe_load(path.read_text(encoding="utf-8"))
    except FileNotFoundError as exc:
        raise SiteMetadataError(f"找不到重大事件文件：{path}") from exc
    except yaml.YAMLError as exc:
        raise SiteMetadataError(f"重大事件 YAML 无法解析：{exc}") from exc
    if not isinstance(raw, list) or not raw:
        raise SiteMetadataError("site-events.yml 必须是非空列表")

    current_date = today or datetime.now(TIMEZONE).date()
    seen: set[str] = set()
    events: list[SiteEvent] = []
    allowed_keys = {"id", "date", "title", "summary", "url"}

    for index, item in enumerate(raw, start=1):
        if not isinstance(item, dict):
            raise SiteMetadataError(f"第 {index} 条事件必须是映射")
        unknown = set(item) - allowed_keys
        if unknown:
            raise SiteMetadataError(
                f"第 {index} 条事件包含未知字段：{', '.join(sorted(unknown))}"
            )

        event_id = item.get("id")
        if not isinstance(event_id, str) or not ID_PATTERN.fullmatch(event_id):
            raise SiteMetadataError(f"第 {index} 条事件的 id 必须是唯一 ASCII slug")
        if event_id in seen:
            raise SiteMetadataError(f"事件 id 重复：{event_id}")
        seen.add(event_id)

        raw_date = item.get("date")
        if isinstance(raw_date, datetime):
            raise SiteMetadataError(f"事件 {event_id} 的 date 只允许 YYYY-MM-DD")
        if isinstance(raw_date, date):
            event_date = raw_date
        elif isinstance(raw_date, str):
            try:
                event_date = date.fromisoformat(raw_date)
            except ValueError as exc:
                raise SiteMetadataError(f"事件 {event_id} 的 date 非法") from exc
        else:
            raise SiteMetadataError(f"事件 {event_id} 缺少合法 date")
        if event_date > current_date:
            raise SiteMetadataError(f"事件 {event_id} 的 date 位于未来")

        title = item.get("title")
        if not isinstance(title, str) or not title.strip():
            raise SiteMetadataError(f"事件 {event_id} 的 title 不能为空")
        title = title.strip()

        summary = item.get("summary")
        if summary is not None:
            if not isinstance(summary, str) or not summary.strip():
                raise SiteMetadataError(f"事件 {event_id} 的 summary 必须是非空字符串")
            summary = summary.strip()

        events.append(
            SiteEvent(
                id=event_id,
                date=event_date,
                title=title,
                summary=summary,
                url=_validate_event_url(item.get("url"), event_id),
            )
        )

    return sorted(events, key=lambda event: event.date, reverse=True)


def _event_title(event: SiteEvent) -> str:
    title = escape(event.title)
    if event.url:
        return f'<a href="{escape(event.url, quote=True)}">{title}</a>'
    return title


def render_latest_event(event: SiteEvent) -> str:
    history_url = "#site-events"
    return f"""
<p class="hb-milestone" data-event-id="{escape(event.id, quote=True)}">
  <span aria-hidden="true">🎉🎉</span>
  <a href="{history_url}">
    <strong><time datetime="{event.date.isoformat()}">{event.date.isoformat()}</time> Update</strong>：{escape(event.title)}
  </a>
  <span aria-hidden="true">🎉🎉</span>
</p>
""".strip()


def render_event_timeline(events: Iterable[SiteEvent]) -> str:
    items: list[str] = []
    for event in events:
        summary = (
            f'\n      <p class="hb-timeline__summary">{escape(event.summary)}</p>'
            if event.summary
            else ""
        )
        items.append(
            f"""
  <article class="hb-timeline__item" id="{escape(event.id, quote=True)}" data-event-id="{escape(event.id, quote=True)}">
    <time datetime="{event.date.isoformat()}">{event.date.isoformat()}</time>
    <div class="hb-timeline__body">
      <h2>{_event_title(event)}</h2>{summary}
    </div>
  </article>
""".rstrip()
        )
    return '<section class="hb-timeline" aria-label="站点重大事件">\n' + "\n".join(items) + "\n</section>"


class BuildMetadataCache:
    """Cache per-page Git lookups for one HEAD while supporting live preview."""

    def __init__(self, root: Path):
        self.root = root.resolve()
        self.repository = GitRepository(self.root)
        self._lock = threading.RLock()
        self._fingerprint: tuple[int, int] | None = None
        self._head: Revision | None = None
        self._page_revisions: dict[str, Revision | None] = {}

    def _log_fingerprint(self) -> tuple[int, int]:
        path = self.repository.head_log_path()
        if path is None:
            return (0, 0)
        try:
            stat = path.stat()
        except FileNotFoundError:
            return (0, 0)
        return (stat.st_mtime_ns, stat.st_size)

    def refresh(self) -> None:
        with self._lock:
            fingerprint = self._log_fingerprint()
            if self._head is not None and fingerprint == self._fingerprint:
                return
            public = is_public_build()
            if public:
                self._head = self.repository.validate_public_head()
            else:
                self.repository.ensure_complete_history()
                self._head = self.repository.head()
            self._fingerprint = fingerprint
            source_paths = [
                path.relative_to(self.root).as_posix()
                for path in (self.root / "docs").rglob("*.md")
            ]
            self._page_revisions = self.repository.revisions_for(source_paths)

    @property
    def head(self) -> Revision:
        self.refresh()
        assert self._head is not None
        return self._head

    def page_revision(self, source_path: str) -> Revision | None:
        self.refresh()
        with self._lock:
            return self._page_revisions.get(source_path)


ROOT = Path(__file__).resolve().parent.parent
CACHE = BuildMetadataCache(ROOT)


def _normalize_source_path(raw_path: str) -> str:
    path = Path(raw_path)
    if path.is_absolute():
        try:
            path = path.resolve().relative_to(ROOT)
        except ValueError as exc:
            raise SiteMetadataError(f"页面路径不在仓库中：{raw_path}") from exc
    if path.parts and path.parts[0] == "docs":
        candidate = path
    else:
        candidate = Path("docs") / path
    normalized = candidate.as_posix()
    if not (ROOT / candidate).is_file():
        raise SiteMetadataError(f"找不到页面源文件：{normalized}")
    return normalized


def page_metadata(source_path: str, *, public: bool | None = None) -> dict[str, Any]:
    normalized = _normalize_source_path(source_path)
    revision = CACHE.page_revision(normalized)
    use_public = is_public_build() if public is None else public
    if revision is None:
        if use_public:
            raise SiteMetadataError(f"发布页面没有 Git 历史：{normalized}")
        return {"status": "untracked", "source_path": normalized}
    metadata: dict[str, Any] = {
        "status": "committed",
        "source_path": normalized,
        "iso": revision.iso,
        "date": revision.display_date,
    }
    if use_public:
        quoted = quote(normalized, safe="/")
        metadata["history_url"] = f"{PUBLIC_REPOSITORY_URL}/commits/main/{quoted}"
    return metadata


def site_metadata(*, public: bool | None = None) -> dict[str, Any]:
    use_public = is_public_build() if public is None else public
    revision = CACHE.head
    if use_public:
        return {
            "mode": "public",
            "iso": revision.iso,
            "datetime": revision.display_datetime,
            "short_sha": revision.commit[:7],
            "commit": revision.commit,
            "commit_url": f"{PUBLIC_REPOSITORY_URL}/commit/{revision.commit}",
        }
    return {
        "mode": "local",
        "iso": revision.iso,
        "datetime": revision.display_datetime,
    }


class SiteMetadataPreprocessor(Preprocessor):
    LATEST_MARKER = "[[site-events:latest]]"
    ALL_MARKER = "[[site-events:all]]"

    def run(self, lines: list[str]) -> list[str]:
        events: list[SiteEvent] | None = None
        output: list[str] = []
        for line in lines:
            marker = line.strip()
            if marker not in {self.LATEST_MARKER, self.ALL_MARKER}:
                output.append(line)
                continue
            if events is None:
                events = load_events(ROOT / "site-events.yml")
            rendered = (
                render_latest_event(events[0])
                if marker == self.LATEST_MARKER
                else render_event_timeline(events)
            )
            output.extend(["", *rendered.splitlines(), ""])

        try:
            from zensical.extensions.context import ContextPreprocessor
        except ImportError:
            return output
        context = ContextPreprocessor.from_markdown(self.md)
        if context is not None:
            context.page.meta["hanabio_revision"] = page_metadata(context.page.path)
            context.page.meta["hanabio_site_revision"] = site_metadata()
        return output


class SiteMetadataExtension(Extension):
    def extendMarkdown(self, md: Markdown) -> None:
        md.registerExtension(self)
        md.preprocessors.register(
            SiteMetadataPreprocessor(md), "hanabio_site_metadata", 35
        )


def makeExtension(**kwargs: Any) -> SiteMetadataExtension:
    return SiteMetadataExtension(**kwargs)
