from __future__ import annotations

from pathlib import Path
import tempfile
import unittest
from types import SimpleNamespace
from unittest.mock import patch

import markdown

from hanabio_site.comments import (
    CommentOffsetsExtension,
    SiteMetadataError,
    load_comment_registry,
    validate_comment_registry,
)


class CommentOffsetsTests(unittest.TestCase):
    def render(self, source: str) -> str:
        return markdown.markdown(
            source,
            extensions=[
                CommentOffsetsExtension(
                    page_id="hb-test-page",
                    source_path="docs/test.md",
                    build_revision="test-revision",
                ),
                "admonition",
                "tables",
                "fenced_code",
            ],
        )

    def test_semantic_blocks_receive_stable_metadata(self) -> None:
        source = "# Title\n\nParagraph text.\n\n- one\n- two\n"
        html = self.render(source)
        self.assertEqual(html.count('data-hanabio-comments="block"'), 3)
        self.assertIn('data-hanabio-page-id="hb-test-page"', html)
        self.assertIn('data-build-revision="test-revision"', html)
        self.assertIn('data-block-start="0"', html)
        self.assertIn('data-block-start="9"', html)
        self.assertRegex(html, r'data-block-fingerprint="[a-f0-9]{20}"')

    def test_admonition_and_code_are_annotated_without_nested_duplicates(self) -> None:
        source = "!!! note\n    A note.\n\n```text\ncode\n```\n"
        html = self.render(source)
        self.assertIn('class="admonition note"', html)
        self.assertIn('data-hanabio-comments="block"', html)
        self.assertIn("<pre", html)


class CommentRegistryTests(unittest.TestCase):
    def test_mkdocs_pages_receive_distinct_registered_identities(self) -> None:
        from hanabio_site.mkdocs_comments import on_page_markdown
        from hanabio_site.metadata import ROOT

        config = {"mdx_configs": {}}
        with patch("hanabio_site.mkdocs_comments.is_public_build", return_value=False):
            for path, expected in [("docs/index.md", "hb-home"),
                                   ("docs/biochem/index.md", "hb-biochem")]:
                page = SimpleNamespace(file=SimpleNamespace(abs_src_path=str(ROOT / path)), meta={})
                source = "# Test\n\nParagraph."
                self.assertEqual(on_page_markdown(source, page=page, config=config, files=None), source)
                html = markdown.markdown(source, extensions=["hanabio_site.comments"],
                                         extension_configs=config["mdx_configs"])
                self.assertIn(f'data-hanabio-page-id="{expected}"', html)
                self.assertEqual(page.meta["hanabio_comments"]["page_id"], expected)

    def test_rejects_duplicate_page_ids(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "comments.yml"
            path.write_text(
                "version: 1\npages:\n  docs/a.md: hb-same\n  docs/b.md: hb-same\ntombstones: []\n",
                encoding="utf-8",
            )
            with self.assertRaises(SiteMetadataError):
                load_comment_registry(path)

    def test_registry_covers_current_docs(self) -> None:
        registry = load_comment_registry()
        validate_comment_registry(registry)
        self.assertEqual(len(registry.pages), len(list(Path("docs").rglob("*.md"))))


if __name__ == "__main__":
    unittest.main()
