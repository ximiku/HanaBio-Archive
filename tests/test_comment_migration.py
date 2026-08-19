from __future__ import annotations

import importlib.util
from pathlib import Path
import sys
import unittest
from unittest.mock import patch


SPEC = importlib.util.spec_from_file_location(
    "comment_migration", Path("scripts/comment_migration.py")
)
assert SPEC and SPEC.loader
MODULE = importlib.util.module_from_spec(SPEC)
sys.modules[SPEC.name] = MODULE
SPEC.loader.exec_module(MODULE)


class CommentMigrationTests(unittest.TestCase):
    def test_unchanged_and_small_edits_are_reattached(self) -> None:
        old_source = "# Title\n\nA paragraph about ATP production.\n"
        new_source = "# Title\n\nA paragraph about cellular ATP production.\n"
        old = MODULE.extract_anchors(old_source, "hb-test", "a" * 40)
        new = MODULE.extract_anchors(new_source, "hb-test", "b" * 40)
        mappings = MODULE.map_anchors(old, new)
        paragraph = next(item for item in mappings if item["from_fingerprint"] == old[1].fingerprint)
        self.assertEqual(paragraph["status"], "active")
        self.assertEqual(paragraph["to"]["fingerprint"], new[1].fingerprint)

    def test_deleted_or_ambiguous_blocks_are_orphaned(self) -> None:
        old_source = "# Title\n\nUnique paragraph that will disappear.\n"
        new_source = "# Title\n\nEntirely unrelated replacement.\n"
        old = MODULE.extract_anchors(old_source, "hb-test", "a" * 40)
        new = MODULE.extract_anchors(new_source, "hb-test", "b" * 40)
        mappings = MODULE.map_anchors(old, new)
        paragraph = next(item for item in mappings if item["from_fingerprint"] == old[1].fingerprint)
        self.assertEqual(paragraph["status"], "orphaned")
        self.assertIsNone(paragraph["to"])

    def test_routes_are_stable_directory_urls(self) -> None:
        self.assertEqual(MODULE.route_for("docs/index.md"), "/")
        self.assertEqual(MODULE.route_for("docs/biochem/index.md"), "/biochem/")
        self.assertEqual(MODULE.route_for("docs/biochem/amino_acid.md"), "/biochem/amino_acid/")

    def test_missing_published_registry_fails_closed(self) -> None:
        with patch.object(
            MODULE,
            "registry_for",
            side_effect=[{"docs/index.md": "hb-home"}, {}],
        ):
            with self.assertRaisesRegex(RuntimeError, "refusing an unsafe migration"):
                MODULE.build_payload("a" * 40, "WORKTREE", "b" * 40)


if __name__ == "__main__":
    unittest.main()
