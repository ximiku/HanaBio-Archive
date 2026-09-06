import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { DatabaseSync } from "node:sqlite";
import test from "node:test";
import worker from "../src/index.mjs";
import { proofChallenge, signToken } from "../src/security.mjs";

// Execute the actual Worker SQL against isolated SQLite. D1's batch transaction
// and 100-bind limit are reproduced; no production services or data are used.
function fixture(t) {
  const sqlite = new DatabaseSync(":memory:");
  sqlite.exec(readFileSync(new URL("../schema.sql", import.meta.url), "utf8"));
  t.after(() => sqlite.close());
  const DB = {
    prepare(sql) {
      const statement = {
        args: [],
        bind(...args) { assert.ok(args.length <= 100); this.args = args; return this; },
        async first() { return sqlite.prepare(sql).get(...this.args) || null; },
        async all() { return { results: sqlite.prepare(sql).all(...this.args) }; },
        async run() { const result = sqlite.prepare(sql).run(...this.args); return { meta: { changes: Number(result.changes) } }; },
      };
      return statement;
    },
    async batch(statements) {
      sqlite.exec("BEGIN");
      try {
        const results = [];
        for (const statement of statements) results.push(await statement.run());
        sqlite.exec("COMMIT");
        return results;
      } catch (error) { sqlite.exec("ROLLBACK"); throw error; }
    },
  };
  const env = { DB, JWT_SECRET: "test-secret-only", DEPLOY_SECRET: "test-deploy-only", SITE_URL: "https://site.test/docs/", ALLOWED_ORIGINS: "https://site.test", ADMIN_GITHUB_IDS: "42" };
  const revision = "a".repeat(40);
  sqlite.prepare("UPDATE site_state SET current_revision = ? WHERE id = 1").run(revision);
  sqlite.exec("INSERT INTO pages VALUES ('hb-test','test.md','Test','now','now')");
  const request = (path, { method = "GET", body, token, headers = {} } = {}) => worker.fetch(new Request(`https://api.test${path}`, {
    method,
    headers: { Origin: "https://site.test", ...(body !== undefined ? { "Content-Type": "application/json" } : {}), ...(token ? { Authorization: `Bearer ${token}` } : {}), ...headers },
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  }), env);
  async function identity(id = "guest", kind = "guest", external = id, admin = false) {
    sqlite.prepare("INSERT INTO commenters VALUES (?, ?, ?, ?, NULL, NULL, ?, ?, 'now','now')").run(id, kind, external, id, kind === "github" ? 1 : 0, admin ? 1 : 0);
    return signToken(env.JWT_SECRET, { scope: "session", sub: id, is_admin: admin }, 3600);
  }
  const anchor = { start: 0, end: 10, fingerprint: "b".repeat(20), quote: "Test paragraph" };
  const grant = (id = "guest") => signToken(env.JWT_SECRET, { scope: "write-comment", sub: id, jti: crypto.randomUUID() }, 300);
  const post = async (token, extra = {}) => request("/v1/comments", { method: "POST", token, body: { page_id: "hb-test", build_revision: revision, anchor, body: "Hello", write_grant: await grant(), ...extra } });
  return { sqlite, DB, env, request, identity, anchor, revision, grant, post };
}

test("rejects cross-origin, oversized chunked bodies, non-object JSON and unauthenticated writes", async (t) => {
  const f = fixture(t);
  assert.equal((await f.request("/", { headers: { Origin: "https://evil.test" } })).status, 403);
  assert.equal((await f.request("/v1/comments", { method: "POST", body: {} })).status, 401);
  for (const body of [null, [], "hello"]) assert.equal((await f.request("/v1/sessions/guest", { method: "POST", body })).status, 400);
  assert.equal((await f.request("/v1/sessions/guest", { method: "POST", body: { padding: "a".repeat(1000001) } })).status, 413);
  const response = await f.request("/");
  assert.equal(response.headers.get("Cache-Control"), "no-store");
  assert.equal(response.headers.get("Vary"), "Origin");
});

test("OAuth redirect works and binds one-time exchange to the initiating browser", async (t) => {
  const f = fixture(t);
  const verifier = "v".repeat(64);
  const challenge = await proofChallenge(verifier);
  const start = await f.request(`/v1/auth/github/start?challenge=${challenge}&return_to=https%3A%2F%2Fsite.test%2Fdocs%2F`);
  assert.equal(start.status, 302);
  const state = new URL(start.headers.get("Location")).searchParams.get("state");
  const originalFetch = globalThis.fetch;
  t.after(() => { globalThis.fetch = originalFetch; });
  globalThis.fetch = async (url) => Response.json(String(url).includes("access_token") ? { access_token: "test-token" } : { id: 42, login: "tester" });
  assert.equal((await f.request("/v1/auth/github/callback?state=wrong&code=test")).status, 400);
  const callback = await f.request(`/v1/auth/github/callback?state=${state}&code=test`);
  assert.equal(callback.status, 302);
  assert.equal((await f.request(`/v1/auth/github/callback?state=${state}&code=test`)).status, 400);
  const code = new URLSearchParams(new URL(callback.headers.get("Location")).hash.slice(1)).get("comment-auth");
  const exchange = (proof) => f.request("/v1/auth/github/exchange", { method: "POST", body: { code, verifier: proof } });
  assert.equal((await exchange("x".repeat(64))).status, 400);
  const results = await Promise.all([exchange(verifier), exchange(verifier)]);
  assert.deepEqual(results.map((response) => response.status).sort(), [200, 400]);
  const payload = await results.find((response) => response.status === 200).json();
  assert.equal(payload.session.commenter.verified, true);
});

test("Turnstile checks server-side hostname and refuses failed or replayed verification", async (t) => {
  const f = fixture(t);
  const originalFetch = globalThis.fetch;
  t.after(() => { globalThis.fetch = originalFetch; });
  for (const result of [{ success: false }, { success: true, hostname: "evil.test" }]) {
    globalThis.fetch = async () => Response.json(result);
    assert.equal((await f.request("/v1/sessions/guest", { method: "POST", body: { nickname: "访客测试", turnstile_token: "test" } })).status, 400);
  }
  globalThis.fetch = async () => Response.json({ success: true, hostname: "site.test" });
  assert.equal((await f.request("/v1/sessions/guest", { method: "POST", body: { nickname: "访客测试", turnstile_token: "test" } })).status, 201);
});

test("guest ownership, plain text, version conflicts, grant replay and deletion tombstones", async (t) => {
  const f = fixture(t);
  const token = await f.identity();
  const stranger = await f.identity("stranger");
  const grant = await f.grant();
  const body = '<img src=x onerror="alert(1)">\nTest';
  assert.equal((await f.post(token, { body, write_grant: grant })).status, 201);
  assert.equal((await f.post(token, { write_grant: grant })).status, 409);
  const id = f.sqlite.prepare("SELECT id FROM comments").get().id;
  const change = (who, method, data) => f.request(`/v1/comments/${id}`, { method, token: who, body: data });
  assert.equal((await change(stranger, "PATCH", { body: "stolen", version: 1 })).status, 403);
  assert.equal((await change(stranger, "DELETE", { version: 1 })).status, 403);
  assert.equal((await change(token, "PATCH", { body: "edited", version: 1 })).status, 200);
  assert.equal((await change(token, "PATCH", { body: "race", version: 1 })).status, 409);
  assert.equal((await change(token, "DELETE", { version: 2 })).status, 200);
  assert.equal(f.sqlite.prepare("SELECT body FROM comments").get().body, "");
  assert.equal(f.sqlite.prepare("SELECT count(*) AS n FROM comments").get().n, 1);
});

test("revoked admin tokens lose moderation and hidden-read access immediately", async (t) => {
  const f = fixture(t);
  const token = await f.identity();
  const admin = await f.identity("admin", "github", "42", true);
  await f.post(token);
  const id = f.sqlite.prepare("SELECT id FROM comments").get().id;
  const moderate = () => f.request(`/v1/admin/comments/${id}`, { method: "PATCH", token: admin, body: { status: "hidden" } });
  assert.equal((await moderate()).status, 200);
  assert.equal((await (await f.request("/v1/pages/hb-test/comments")).json()).threads[0].comments.length, 0);
  f.env.ADMIN_GITHUB_IDS = "";
  assert.equal((await moderate()).status, 403);
  assert.equal((await (await f.request("/v1/pages/hb-test/comments", { token: admin })).json()).threads[0].comments.length, 0);
});

test("pages with over 100 threads do not exceed the D1 bind limit", async (t) => {
  const f = fixture(t);
  for (let i = 0; i < 120; i++) f.sqlite.prepare("INSERT INTO threads VALUES (?, 'hb-test', 0, 1, ?, 'quote', 'active', ?, ?, 'now', 'now')").run(String(i), i.toString(16).padStart(20, "0"), f.revision, f.revision);
  const response = await f.request("/v1/pages/hb-test/comments");
  assert.equal(response.status, 200);
  assert.equal((await response.json()).threads.length, 120);
});

test("stale page rejection does not consume an unused write grant", async (t) => {
  const f = fixture(t);
  const token = await f.identity();
  const write_grant = await f.grant();
  assert.equal((await f.post(token, { build_revision: "c".repeat(40), write_grant })).status, 409);
  assert.equal((await f.post(token, { write_grant })).status, 201);
});

test("migration preserves history, handles old-page writes and activation retries", async (t) => {
  const f = fixture(t);
  const token = await f.identity();
  await f.post(token);
  const target = "c".repeat(40);
  const nextAnchor = { ...f.anchor, fingerprint: "d".repeat(20), start: 20, end: 30 };
  f.sqlite.prepare("INSERT INTO threads VALUES ('history','hb-test',0,10,?,'Old quote','orphaned',?,?,'now','now')").run(f.anchor.fingerprint, f.revision, f.revision);
  const deploy = (action, body) => f.request(`/v1/deploy/${action}`, { method: "POST", token: f.env.DEPLOY_SECRET, body });
  assert.equal((await deploy("prepare", { from_revision: f.revision, revision: target, pages: [{ page_id: "hb-test", path: "/test/", title: "Renamed" }], mappings: [
    { page_id: "hb-test", from_fingerprint: f.anchor.fingerprint, status: "active", to: nextAnchor },
    { page_id: "hb-test", from_fingerprint: nextAnchor.fingerprint, status: "orphaned", to: null },
  ] })).status, 201);
  assert.equal((await deploy("activate", { revision: target })).status, 200);
  assert.equal((await deploy("activate", { revision: target })).status, 200);
  const history = f.sqlite.prepare("SELECT * FROM threads WHERE id = 'history'").get();
  assert.equal(history.anchor_fingerprint, f.anchor.fingerprint);
  assert.equal(history.status, "orphaned");
  const active = f.sqlite.prepare("SELECT * FROM threads WHERE status = 'active'").get();
  assert.equal(active.anchor_fingerprint, nextAnchor.fingerprint);
  assert.equal((await f.post(token)).status, 201);
  assert.equal(f.sqlite.prepare("SELECT count(*) AS n FROM comments WHERE thread_id = ?").get(active.id).n, 2);
  assert.equal((await f.post(token, { build_revision: target, anchor: nextAnchor })).status, 201);
  assert.equal(f.sqlite.prepare("SELECT count(*) AS n FROM comments").get().n, 3);
});

test("migration rejects stale prepared revisions and duplicate mappings", async (t) => {
  const f = fixture(t);
  const deploy = (action, body) => f.request(`/v1/deploy/${action}`, { method: "POST", token: f.env.DEPLOY_SECRET, body });
  const payload = { from_revision: f.revision, revision: "c".repeat(40), pages: [], mappings: [] };
  assert.equal((await deploy("prepare", payload)).status, 201);
  f.sqlite.prepare("UPDATE site_state SET current_revision = ? WHERE id = 1").run("d".repeat(40));
  assert.equal((await deploy("activate", { revision: payload.revision })).status, 409);
  const mapping = { page_id: "hb-test", from_fingerprint: f.anchor.fingerprint, status: "orphaned", to: null };
  assert.equal((await deploy("prepare", { ...payload, mappings: [mapping, mapping] })).status, 400);
});

test("rate limiting, expired identities and unauthorised administration fail closed", async (t) => {
  const f = fixture(t);
  const token = await f.identity();
  const expired = await signToken(f.env.JWT_SECRET, { scope: "session", sub: "guest" }, 1, 1);
  assert.equal((await f.post(expired)).status, 401);
  assert.equal((await f.request("/v1/admin/threads/unknown/reattach", { method: "POST", token, body: {} })).status, 403);
  for (let i = 0; i < 8; i++) await f.request("/v1/sessions/guest", { method: "POST", body: {} });
  assert.equal((await f.request("/v1/sessions/guest", { method: "POST", body: {} })).status, 429);
  assert.equal((await f.request("/v1/deploy/activate", { method: "POST", token, body: { revision: f.revision } })).status, 401);
});

test("retrying a lost successful response cannot duplicate a comment", async (t) => {
  const f = fixture(t);
  const token = await f.identity();
  const request_id = crypto.randomUUID();
  const write_grant = await f.grant();
  assert.equal((await f.post(token, { request_id, write_grant })).status, 201);
  assert.equal((await f.post(token, { request_id, write_grant })).status, 201);
  assert.equal(f.sqlite.prepare("SELECT count(*) AS n FROM comments").get().n, 1);
  assert.equal((await f.post(token, { request_id, body: "different content" })).status, 409);
  const stranger = await f.identity("stranger");
  assert.equal((await f.post(stranger, { request_id })).status, 409);
});
