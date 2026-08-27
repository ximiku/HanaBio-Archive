#!/usr/bin/env python3
"""Call protected comment deployment endpoints without exposing credentials."""

from __future__ import annotations

import argparse
import json
import os
from pathlib import Path
import sys
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen


def call(method: str, path: str, payload: bytes | None = None) -> dict:
    endpoint = os.environ.get("HANABIO_COMMENT_API_URL", "").rstrip("/")
    secret = os.environ.get("HANABIO_COMMENT_DEPLOY_SECRET", "")
    if not endpoint or not secret:
        raise RuntimeError("comment API URL or deploy secret is not configured")
    request = Request(
        f"{endpoint}{path}",
        method=method,
        data=payload,
        headers={
            "Authorization": f"Bearer {secret}",
            "Accept": "application/json",
            "User-Agent": "HanaBio-Deploy/1.0 (+https://github.com/ximiku/HanaBio-Archive)",
            **({"Content-Type": "application/json"} if payload is not None else {}),
        },
    )
    try:
        with urlopen(request, timeout=30) as response:
            return json.load(response)
    except HTTPError as exc:
        try:
            detail = json.load(exc).get("error", "unknown error")
        except Exception:
            detail = "unreadable error response"
        raise RuntimeError(f"comment service rejected request ({exc.code}): {detail}") from exc
    except URLError as exc:
        raise RuntimeError(f"cannot reach comment service: {exc.reason}") from exc


def main() -> None:
    parser = argparse.ArgumentParser()
    subparsers = parser.add_subparsers(dest="command", required=True)
    state = subparsers.add_parser("state")
    state.add_argument("--output", required=True, type=Path)
    prepare = subparsers.add_parser("prepare")
    prepare.add_argument("--payload", required=True, type=Path)
    activate = subparsers.add_parser("activate")
    activate.add_argument("--revision", required=True)
    args = parser.parse_args()

    if args.command == "state":
        payload = call("GET", "/v1/deploy/state")
        args.output.write_text(payload.get("current_revision", ""), encoding="utf-8")
        print("Comment service state fetched")
    elif args.command == "prepare":
        payload = args.payload.read_bytes()
        call("POST", "/v1/deploy/prepare", payload)
        print("Comment migration accepted")
    else:
        call(
            "POST",
            "/v1/deploy/activate",
            json.dumps({"revision": args.revision}).encode("utf-8"),
        )
        print("Comment migration activated")


if __name__ == "__main__":
    try:
        main()
    except RuntimeError as exc:
        print(f"Comment deployment failed: {exc}", file=sys.stderr)
        raise SystemExit(1)
