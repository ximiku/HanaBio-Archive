import assert from "node:assert/strict";
import test from "node:test";

import { hashRateKey, signToken, verifyToken } from "../src/security.mjs";

test("signs and verifies scoped tokens", async () => {
  const token = await signToken("test-secret", { sub: "visitor", scope: "session" }, 60, 1000);
  const payload = await verifyToken("test-secret", token, { scope: "session" }, 1001);
  assert.equal(payload.sub, "visitor");
  assert.equal(payload.exp, 1060);
});

test("rejects expired, altered, and wrongly scoped tokens", async () => {
  const token = await signToken("test-secret", { sub: "visitor", scope: "session" }, 10, 1000);
  await assert.rejects(() => verifyToken("test-secret", token, {}, 1011), /Expired/);
  await assert.rejects(() => verifyToken("test-secret", `${token}x`, {}, 1001), /Invalid/);
  await assert.rejects(() => verifyToken("test-secret", token, { scope: "write" }, 1001), /scope/);
});

test("rate keys are deterministic without exposing their input", async () => {
  const first = await hashRateKey("secret", "192.0.2.1");
  const second = await hashRateKey("secret", "192.0.2.1");
  assert.equal(first, second);
  assert.ok(!first.includes("192.0.2.1"));
});
