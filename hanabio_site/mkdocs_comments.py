"""Pass MkDocs page identity to the shared Markdown comment extension."""

from pathlib import Path

from hanabio_site.comments import comment_runtime_config, load_comment_registry
from hanabio_site.metadata import CACHE, ROOT, is_public_build


def on_page_markdown(markdown, *, page, config, files):
    source_path = Path(page.file.abs_src_path).resolve().relative_to(ROOT).as_posix()
    page_id = load_comment_registry().page_id(source_path)
    revision = CACHE.head.commit if is_public_build() else "local"
    config["mdx_configs"]["hanabio_site.comments"] = {
        "page_id": page_id,
        "source_path": source_path,
        "build_revision": revision,
    }
    page.meta["hanabio_comments"] = {
        "page_id": page_id,
        "source_path": source_path,
        "build_revision": revision,
        **comment_runtime_config(),
    }
    return markdown
