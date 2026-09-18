const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { test } = require("node:test");
const vm = require("node:vm");
const source = readFileSync(new URL("../docs/js/analytics.js", `file://${__filename}`), "utf8");

function browser(href, property = "G-X7H5VXYFTC") {
  const tags = [];
  const context = {
    URL, URLSearchParams, location: new URL(href),
    document: {
      currentScript: { dataset: { property, siteUrl: "https://ximiku.github.io/HanaBio-Archive/" } },
      createElement: () => ({}), head: { append: tag => tags.push(tag) }
    }
  };
  context.window = context;
  return { context, tags, run: () => vm.runInNewContext(source, context) };
}

test("loads one tag and initializes once, even if the script runs again", () => {
  const state = browser("https://ximiku.github.io/HanaBio-Archive/cell/");
  state.run(); state.run();
  assert.equal(state.tags.length, 1);
  assert.equal(state.tags[0].async, true);
  assert.equal(state.tags[0].src, "https://www.googletagmanager.com/gtag/js?id=G-X7H5VXYFTC");
  assert.deepEqual(Array.from(state.context.dataLayer[1]), ["config", "G-X7H5VXYFTC"]);
  assert.equal(state.context.dataLayer.length, 2);
});

for (const href of [
  "http://127.0.0.1:8001/HanaBio-Archive/", "http://localhost:8001/HanaBio-Archive/",
  "https://preview.example/HanaBio-Archive/", "https://ximiku.github.io/another-site/",
  "https://ximiku.github.io/HanaBio-Archive-copy/", "http://ximiku.github.io/HanaBio-Archive/",
  "https://ximiku.github.io/HanaBio-Archive/?giscus=private",
  "https://ximiku.github.io/HanaBio-Archive/?hb-login=private"
]) test(`does not track ${href.replace(/private/g, "redacted")}`, () => {
  const state = browser(href); state.run();
  assert.equal(state.tags.length, 0);
  assert.equal(state.context.dataLayer, undefined);
});

test("does not install a second navigation or anchor tracker", () => {
  const state = browser("https://ximiku.github.io/HanaBio-Archive/");
  state.run();
  state.context.location = new URL("https://ximiku.github.io/HanaBio-Archive/cell/#fn:one");
  state.run();
  assert.equal(state.context.dataLayer.length, 2);
});

test("disabled or invalid measurement IDs do not load Google", () => {
  for (const property of ["", "UA-123", "bad\"value"]) {
    const state = browser("https://ximiku.github.io/HanaBio-Archive/", property);
    state.run(); assert.equal(state.tags.length, 0);
  }
});

test("login callbacks are consumed before the first analytics initialization", () => {
  const state = browser("https://ximiku.github.io/HanaBio-Archive/cell/?giscus=test-session&hb-login=test-nonce&h=cell#content");
  state.context.history = {
    state: null,
    replaceState(_state, _title, href) { state.context.location = new URL(href); }
  };
  const auth = readFileSync(new URL("../docs/js/comment-auth.js", `file://${__filename}`), "utf8");
  vm.runInNewContext(auth, state.context);
  state.run();
  assert.equal(state.context.location.search, "?h=cell");
  assert.equal(state.context.location.hash, "#content");
  assert.equal(state.tags.length, 1);
  assert.equal(state.context.dataLayer.length, 2);
});
