import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import test from "node:test";
import { webcrypto } from "node:crypto";

const source = readFileSync(new URL("../../../docs/js/comment-auth.js", import.meta.url), "utf8");
const keys = { session: "hanabio-comment-session-v1", guest: "hanabio-comment-guest-v1", giscus: "giscus-session", pending: "hanabio-comment-giscus-login-v1" };
const identity = (verified = true) => ({ token: "worker-only", expires_at: new Date(Date.now() + 3600000).toISOString(), commenter: { id: verified ? "github" : "guest", verified } });
function setup({ url = "https://site.test/docs/", pending = null, stored = {}, fetcher = async () => Response.json({ session: identity() }), enabled = true } = {}) {
  const storage = entries => {
    const values = new Map(Object.entries(entries));
    return { getItem: k => values.get(k) ?? null, setItem: (k, v) => values.set(k, v), removeItem: k => values.delete(k) };
  };
  const localStorage = storage(Object.fromEntries(Object.entries(stored).map(([k, v]) => [k, JSON.stringify(v)])));
  const sessionStorage = storage(pending ? { [keys.pending]: JSON.stringify(pending) } : {});
  const location = new URL(url); location.assign = value => { location.assigned = value; };
  const window = new EventTarget();
  const frames = [];
  const mount = { replaceChildren(frame) { frames.splice(0, frames.length, frame); } };
  const root = { dataset: { giscusSharedLogin: String(enabled), giscusEnabled: "true", giscusRepo: "test/repo", giscusRepoId: "repo", giscusCategory: "General", giscusCategoryId: "category", hanabioPageId: "hb-test" }, querySelector: () => mount };
  const changes = [], statuses = [], drafts = [], calls = [];
  const context = vm.createContext({ window, localStorage, sessionStorage, location, URL, URLSearchParams,
    crypto: webcrypto, TextEncoder, AbortController, AbortSignal, Date,
    history: { state: null, replaceState(_state, _title, next) { location.href = next; } },
    document: { title: "Test", createElement() { return { style: {}, contentWindow: {}, setAttribute() {} }; } },
    fetch: async (...args) => { calls.push(args); return fetcher(...args); },
  });
  vm.runInContext(source, context);
  const auth = new window.HanaBioCommentAuth({ root, api: "https://api.test", theme: () => "light",
    snapshot: () => ({ text: "draft" }), restore: saved => drafts.push(saved), changed: saved => changes.push(saved), status: (...args) => statuses.push(args),
  });
  return { auth, root, window, localStorage, sessionStorage, location, frames, changes, statuses, drafts, calls };
}
const pending = () => ({ nonce: "browser-proof", path: "/docs/", created: Date.now(), draft: { text: "retained" } });
const returnedUrl = "https://site.test/docs/?hb-login=browser-proof&giscus=credential-from-giscus";

test("rejects injected, expired and wrong-page callbacks before any exchange; cleans URL", async () => {
  for (const proof of [null, { ...pending(), nonce: "different" }, { ...pending(), created: Date.now() - 86400001 }, { ...pending(), path: "/other/" }]) {
    const f = setup({ url: returnedUrl, pending: proof, stored: { [keys.session]: identity() } });
    await f.auth.init();
    assert.equal(f.calls.length, 0);
    assert.equal(f.location.search, "");
    assert.equal(f.localStorage.getItem(keys.giscus), null);
    assert.ok(f.statuses[0][0].includes("无效"));
    f.auth.destroy();
  }
});

test("bound login shares identity, restores draft and protects guest credentials", async () => {
  const f = setup({ url: returnedUrl, pending: pending(), stored: { [keys.session]: identity(false) } });
  await f.auth.init();
  assert.equal(f.calls.length, 1);
  assert.equal(f.calls[0][0], "https://api.test/v1/auth/giscus/exchange");
  assert.equal(f.drafts[0].text, "retained");
  assert.equal(JSON.parse(f.localStorage.getItem(keys.giscus)), "credential-from-giscus");
  assert.equal(JSON.parse(f.localStorage.getItem(keys.guest)).commenter.id, "guest");
  const widget = new URL(f.frames[0].src);
  assert.equal(new URL(widget.searchParams.get("origin")).searchParams.get("hb-login"), f.auth.nonce);
  assert.equal(widget.searchParams.get("backLink"), "https://site.test/docs/");
  f.auth.start();
  assert.equal(new URL(f.location.assigned).origin, "https://giscus.app");
  f.auth.logout();
  assert.equal(f.localStorage.getItem(keys.giscus), null);
  assert.equal(f.localStorage.getItem(keys.session), null);
  assert.equal(f.auth.restoreGuest(), true);
  assert.equal(JSON.parse(f.localStorage.getItem(keys.session)).commenter.id, "guest");
  f.auth.destroy();
});

test("cancelled and failed logins retain drafts and never import unverified credentials", async () => {
  const cancelled = setup({ url: "https://site.test/docs/?hb-login=browser-proof", pending: pending() });
  await cancelled.auth.init(); assert.equal(cancelled.calls.length, 0); assert.equal(cancelled.drafts[0].text, "retained");
  cancelled.auth.destroy();
  const failed = setup({ url: returnedUrl, pending: pending(), fetcher: async () => Response.json({ error: "mismatch" }, { status: 409 }) });
  await failed.auth.init(); assert.equal(failed.auth.failed, true); assert.equal(failed.localStorage.getItem(keys.giscus), null);
  failed.auth.destroy();
});

test("legacy stored giscus sessions are not silently exchanged; message origin and source are checked", async () => {
  const f = setup({ stored: { [keys.giscus]: "legacy", [keys.session]: identity() } });
  await f.auth.init(); assert.equal(f.calls.length, 0);
  f.auth.message({ origin: "https://evil.test", source: f.frames[0].contentWindow, data: { giscus: { signOut: true } } });
  f.auth.message({ origin: "https://giscus.app", source: {}, data: { giscus: { signOut: true } } });
  assert.notEqual(f.localStorage.getItem(keys.session), null);
  f.auth.message({ origin: "https://giscus.app", source: f.frames[0].contentWindow, data: { giscus: { signOut: true } } });
  assert.equal(f.localStorage.getItem(keys.session), null);
  f.auth.destroy();
});

test("logout while exchange is in flight cannot resurrect a session", async () => {
  let resolve;
  const f = setup({ url: returnedUrl, pending: pending(), fetcher: () => new Promise(done => { resolve = done; }) });
  const initializing = f.auth.init();
  f.auth.logout(); resolve(Response.json({ session: identity() })); await initializing;
  assert.equal(f.localStorage.getItem(keys.session), null);
  assert.equal(f.localStorage.getItem(keys.giscus), null);
  f.auth.destroy();
});

test("feature switch preserves ordinary giscus OAuth without using the bridge", async () => {
  const f = setup({ url: returnedUrl, pending: pending(), enabled: false });
  await f.auth.init(); assert.equal(f.calls.length, 0);
  assert.equal(JSON.parse(f.localStorage.getItem(keys.giscus)), "credential-from-giscus");
  f.auth.destroy();
});


test("storage events synchronize identity and logout across tabs without duplicate widgets", async () => {
  const f = setup();
  await f.auth.init();
  const notify = () => {
    const event = new Event("storage");
    Object.defineProperty(event, "key", { value: keys.session });
    f.window.dispatchEvent(event);
  };
  f.localStorage.setItem(keys.session, JSON.stringify(identity())); notify();
  assert.equal(f.changes.at(-1).commenter.id, "github");
  assert.equal(f.frames.length, 1);
  f.localStorage.removeItem(keys.session); notify();
  assert.equal(f.changes.at(-1), null);
  assert.equal(f.frames.length, 1);
  f.auth.destroy();
  const count = f.changes.length; notify();
  assert.equal(f.changes.length, count);
});
