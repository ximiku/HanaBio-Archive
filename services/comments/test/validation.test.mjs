import assert from "node:assert/strict";
import test from "node:test";

import {
  cleanBody,
  cleanNickname,
  safeReturnTo,
  validateAnchor,
  validatePageId,
  validateRevision,
} from "../src/validation.mjs";

test("validates immutable IDs, revisions, and semantic anchors", () => {
  assert.equal(validatePageId("hb-biochem-amino-acid"), true);
  assert.equal(validatePageId("biochem/amino"), false);
  assert.equal(validateRevision("a".repeat(40)), true);
  assert.equal(validateAnchor({ start: 1, end: 9, fingerprint: "a".repeat(20), quote: "text" }), true);
  assert.equal(validateAnchor({ start: 9, end: 1, fingerprint: "a".repeat(20), quote: "text" }), false);
});

test("keeps comments plain-text and bounded", () => {
  assert.equal(cleanBody("  Hello\r\nworld  "), "Hello\nworld");
  assert.equal(cleanBody(""), null);
  assert.equal(cleanBody("https://x.test ".repeat(6)), null);
  assert.equal(cleanNickname("  生物 学习者  "), "生物 学习者");
  assert.equal(cleanNickname("<admin>"), null);
});

test("return URLs are restricted to configured site origins", () => {
  const env = { SITE_URL: "https://example.test/docs/", ALLOWED_ORIGINS: "https://example.test,http://localhost:8000" };
  assert.equal(safeReturnTo("https://example.test/docs/page/#old", env), "https://example.test/docs/page/");
  assert.equal(safeReturnTo("https://example.test/page/", env), null);
  assert.equal(safeReturnTo("https://example.test/docs-evil/", env), null);
  assert.equal(safeReturnTo("https://user:pass@example.test/docs/", env), null);
  assert.equal(safeReturnTo("http://localhost:8000/", env), "http://localhost:8000/");
  assert.equal(safeReturnTo("https://evil.test/", env), null);
});
