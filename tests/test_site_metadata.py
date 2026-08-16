from __future__ import annotations

from datetime import date
import os
from pathlib import Path
import subprocess
import tempfile
import unittest

from hanabio_site.metadata import (
    GitRepository,
    SiteEvent,
    SiteMetadataError,
    load_events,
    render_event_timeline,
    render_latest_event,
)


class GitRepositoryTests(unittest.TestCase):
    def run_git(self, root: Path, *args: str, env: dict[str, str] | None = None) -> None:
        subprocess.run(("git", *args), cwd=root, env=env, check=True, capture_output=True)

    def make_repository(self, root: Path) -> GitRepository:
        self.run_git(root, "init", "-q")
        self.run_git(root, "config", "user.name", "Test")
        self.run_git(root, "config", "user.email", "test@example.com")
        (root / "a.md").write_text("a\n", encoding="utf-8")
        self.run_git(root, "add", "a.md")
        env = os.environ.copy()
        env["GIT_AUTHOR_DATE"] = "2026-08-15T23:30:00-04:00"
        env["GIT_COMMITTER_DATE"] = "2026-08-15T23:30:00-04:00"
        self.run_git(root, "commit", "-qm", "a", env=env)
        (root / "b.md").write_text("b\n", encoding="utf-8")
        self.run_git(root, "add", "b.md")
        env["GIT_AUTHOR_DATE"] = "2026-08-16T21:59:00+08:00"
        env["GIT_COMMITTER_DATE"] = "2026-08-16T21:59:00+08:00"
        self.run_git(root, "commit", "-qm", "b", env=env)
        return GitRepository(root)

    def test_page_revisions_and_timezone_conversion(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            repository = self.make_repository(Path(directory))
            a = repository.revision_for("a.md")
            b = repository.revision_for("b.md")
            assert a is not None and b is not None
            self.assertEqual(a.display_date, "2026-08-16")
            self.assertEqual(b.display_datetime, "2026-08-16 21:59")
            self.assertNotEqual(a.commit, b.commit)

            revisions = repository.revisions_for(["a.md", "b.md"])
            self.assertEqual(revisions["a.md"], a)
            self.assertEqual(revisions["b.md"], b)

    def test_untracked_page_has_no_revision(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            repository = self.make_repository(root)
            (root / "new.md").write_text("new\n", encoding="utf-8")
            self.assertIsNone(repository.revision_for("new.md"))
            self.assertNotIn("new.md", repository.revisions_for(["a.md", "new.md"]))

    def test_missing_git_repository_fails(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            with self.assertRaises(SiteMetadataError):
                GitRepository(Path(directory)).head()

    def test_shallow_clone_fails_completeness_check(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            base = Path(directory)
            source = base / "source"
            clone = base / "clone"
            source.mkdir()
            self.make_repository(source)
            subprocess.run(
                ("git", "clone", "-q", "--depth=1", source.as_uri(), str(clone)),
                check=True,
                capture_output=True,
            )
            with self.assertRaises(SiteMetadataError):
                GitRepository(clone).ensure_complete_history()

    def test_public_head_must_match_ci_sha(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            repository = self.make_repository(Path(directory))
            with self.assertRaises(SiteMetadataError):
                repository.validate_public_head({"GITHUB_SHA": "0" * 40})


class SiteEventTests(unittest.TestCase):
    def load(self, text: str) -> list[SiteEvent]:
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "events.yml"
            path.write_text(text, encoding="utf-8")
            return load_events(path, today=date(2026, 8, 16))

    def test_events_sort_by_date_and_keep_same_day_order(self) -> None:
        events = self.load(
            """
- {id: older, date: 2025-01-01, title: Older}
- {id: first, date: 2026-01-01, title: First}
- {id: second, date: 2026-01-01, title: Second}
"""
        )
        self.assertEqual([event.id for event in events], ["first", "second", "older"])

    def test_duplicate_id_fails(self) -> None:
        with self.assertRaises(SiteMetadataError):
            self.load(
                """
- {id: duplicate, date: 2026-01-01, title: One}
- {id: duplicate, date: 2026-01-02, title: Two}
"""
            )

    def test_future_date_fails(self) -> None:
        with self.assertRaises(SiteMetadataError):
            self.load("- {id: future, date: 2026-08-17, title: Future}\n")

    def test_invalid_or_unsafe_url_fails(self) -> None:
        for url in ("javascript:alert(1)", "http://example.com", "//example.com"):
            with self.subTest(url=url), self.assertRaises(SiteMetadataError):
                self.load(f"- {{id: unsafe, date: 2026-01-01, title: Unsafe, url: '{url}'}}\n")

    def test_rendering_escapes_user_content(self) -> None:
        event = SiteEvent(
            id="escaped",
            date=date(2026, 1, 1),
            title="<script>alert(1)</script>",
            summary="A & B",
        )
        latest = render_latest_event(event)
        timeline = render_event_timeline([event])
        self.assertNotIn("<script>", latest + timeline)
        self.assertIn("&lt;script&gt;", latest)
        self.assertIn("A &amp; B", timeline)
        self.assertIn('href="#site-events"', latest)
        link_start = latest.index('<a href="#site-events">')
        link_end = latest.index("</a>", link_start)
        first_emoji = latest.index("🎉🎉")
        last_emoji = latest.rindex("🎉🎉")
        self.assertLess(first_emoji, link_start)
        self.assertGreater(last_emoji, link_end)


if __name__ == "__main__":
    unittest.main()
