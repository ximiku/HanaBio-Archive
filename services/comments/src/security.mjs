const encoder = new TextEncoder();
const decoder = new TextDecoder();

function bytesToBase64Url(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}

function textToBase64Url(value) {
  return bytesToBase64Url(encoder.encode(value));
}

function base64UrlToText(value) {
  const padded = value.replaceAll("-", "+").replaceAll("_", "/") + "===".slice((value.length + 3) % 4);
  const binary = atob(padded);
  return decoder.decode(Uint8Array.from(binary, (character) => character.charCodeAt(0)));
}

async function hmac(secret, value) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  return new Uint8Array(await crypto.subtle.sign("HMAC", key, encoder.encode(value)));
}

export async function signToken(secret, claims, ttlSeconds, nowSeconds = Math.floor(Date.now() / 1000)) {
  if (!secret) throw new Error("JWT_SECRET is not configured");
  const header = textToBase64Url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = textToBase64Url(JSON.stringify({
    ...claims,
    iat: nowSeconds,
    exp: nowSeconds + ttlSeconds,
  }));
  const signature = bytesToBase64Url(await hmac(secret, `${header}.${payload}`));
  return `${header}.${payload}.${signature}`;
}

export async function verifyToken(secret, token, options = {}, nowSeconds = Math.floor(Date.now() / 1000)) {
  if (!secret || typeof token !== "string" || token.length > 8192) throw new Error("Invalid token");
  const parts = token.split(".");
  if (parts.length !== 3) throw new Error("Invalid token");
  const expected = await hmac(secret, `${parts[0]}.${parts[1]}`);
  const actualText = parts[2].replaceAll("-", "+").replaceAll("_", "/") + "===".slice((parts[2].length + 3) % 4);
  let actual;
  try {
    const binary = atob(actualText);
    actual = Uint8Array.from(binary, (character) => character.charCodeAt(0));
  } catch (_error) {
    throw new Error("Invalid token");
  }
  if (actual.length !== expected.length) throw new Error("Invalid token");
  let mismatch = 0;
  for (let index = 0; index < expected.length; index += 1) mismatch |= expected[index] ^ actual[index];
  if (mismatch) throw new Error("Invalid token");
  let payload;
  try {
    const header = JSON.parse(base64UrlToText(parts[0]));
    if (header.alg !== "HS256" || header.typ !== "JWT") throw new Error("Invalid token");
    payload = JSON.parse(base64UrlToText(parts[1]));
  } catch (_error) {
    throw new Error("Invalid token");
  }
  if (!payload || !Number.isInteger(payload.exp) || payload.exp <= nowSeconds) throw new Error("Expired token");
  if (!Number.isInteger(payload.iat) || payload.iat > nowSeconds + 60 || payload.iat >= payload.exp) throw new Error("Invalid token time");
  if (options.scope && payload.scope !== options.scope) throw new Error("Invalid token scope");
  return payload;
}

export async function proofChallenge(verifier) {
  if (typeof verifier !== "string" || !/^[A-Za-z0-9_-]{43,128}$/.test(verifier)) throw new Error("Invalid login proof");
  return bytesToBase64Url(new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode(verifier))));
}

export async function hashRateKey(secret, value) {
  return bytesToBase64Url(await hmac(secret, value));
}

export function bearerToken(request) {
  const value = request.headers.get("Authorization") || "";
  return value.startsWith("Bearer ") ? value.slice(7).trim() : "";
}
