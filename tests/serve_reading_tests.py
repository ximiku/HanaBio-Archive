"""Serve only the reading test fixture and its assets; never expose local/.

Run with .venv-zensical/bin/python tests/serve_reading_tests.py and open
http://127.0.0.1:8002/ in a browser. No additional browser/test packages needed.
"""

from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
FILES = {
    "/": (ROOT / "tests/reading-enhancements.html", "text/html"),
    **{
        f"/js/{name}.js": (ROOT / f"docs/js/{name}.js", "text/javascript")
        for name in ("mathjax", "search-math")
    },
}


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        entry = FILES.get(urlsplit(self.path).path)
        if not entry:
            self.send_error(404)
            return
        path, content_type = entry
        data = path.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", f"{content_type}; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(data)


if __name__ == "__main__":
    print("Reading tests: http://127.0.0.1:8002/", flush=True)
    ThreadingHTTPServer(("127.0.0.1", 8002), Handler).serve_forever()
