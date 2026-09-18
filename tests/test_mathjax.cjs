const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { test } = require("node:test");
const vm = require("node:vm");
const source = readFileSync(new URL("../docs/js/mathjax.js", `file://${__filename}`), "utf8");
const flush = () => new Promise(resolve => setImmediate(resolve));

function deferred() {
  let resolve;
  const promise = new Promise(done => { resolve = done; });
  return { promise, resolve };
}

function configure() {
  let navigate;
  const errors = [];
  const context = {
    console: { error: (...args) => errors.push(args) },
    document$: { subscribe(callback) { navigate = callback; callback(); } }
  };
  context.window = context;
  vm.runInNewContext(source, context);
  // Loading only the configuration must not touch the not-yet-loaded library.
  assert.equal(navigate, undefined);
  return { math: context.MathJax, navigate: () => navigate(), errors };
}

test("waits for startup and serializes rapid page changes", async () => {
  const state = configure();
  const startup = deferred();
  const runs = [];
  let page = "initial", active = 0, maxActive = 0;
  Object.assign(state.math, {
    typesetClear() { assert.equal(active, 0); },
    texReset() {},
    typesetPromise() {
      const gate = deferred();
      active += 1;
      maxActive = Math.max(maxActive, active);
      runs.push({ page, gate });
      return gate.promise.then(() => { active -= 1; });
    }
  });
  state.math.startup.defaultReady = () => {
    state.math.startup.promise = startup.promise;
    state.math.startup.output = { clearCache() {} };
  };
  state.math.startup.ready();
  page = "DNA"; state.navigate();
  page = "reverse transcription"; state.navigate();
  await flush();
  assert.equal(runs.length, 0);
  startup.resolve();
  await flush();
  assert.deepEqual(runs.map(run => run.page), ["reverse transcription"]);
  page = "DNA"; state.navigate();
  page = "membrane"; state.navigate();
  await flush();
  assert.equal(runs.length, 1);
  runs[0].gate.resolve();
  await flush();
  assert.deepEqual(runs.map(run => run.page), ["reverse transcription", "membrane"]);
  runs[1].gate.resolve();
  await flush();
  assert.equal(maxActive, 1);
  assert.equal(state.errors.length, 0);
});

test("a failed page does not prevent the next page from typesetting", async () => {
  const state = configure();
  let calls = 0;
  Object.assign(state.math, {
    typesetClear() {}, texReset() {},
    typesetPromise() {
      calls += 1;
      return calls === 1 ? Promise.reject(new Error("temporary failure")) : Promise.resolve();
    }
  });
  state.math.startup.defaultReady = () => {
    state.math.startup.promise = Promise.resolve();
    state.math.startup.output = { clearCache() {} };
  };
  state.math.startup.ready();
  await flush();
  assert.equal(state.errors.length, 1);
  state.navigate();
  await flush();
  assert.equal(calls, 2);
});
