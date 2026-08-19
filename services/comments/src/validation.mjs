export const PAGE_ID_PATTERN = /^hb-[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const FINGERPRINT_PATTERN = /^[a-f0-9]{20}$/;
export const REVISION_PATTERN = /^[a-f0-9]{40}$/;

export function validatePageId(value) {
  return typeof value === "string" && PAGE_ID_PATTERN.test(value);
}

export function validateRevision(value, { optional = false } = {}) {
  return optional && !value ? true : typeof value === "string" && REVISION_PATTERN.test(value);
}

export function validateAnchor(value) {
  return Boolean(
    value &&
    Number.isInteger(value.start) &&
    Number.isInteger(value.end) &&
    value.start >= 0 &&
    value.end >= value.start &&
    value.end - value.start <= 200000 &&
    FINGERPRINT_PATTERN.test(value.fingerprint || "") &&
    typeof value.quote === "string" &&
    value.quote.trim().length > 0 &&
    value.quote.length <= 1000
  );
}

export function cleanBody(value) {
  if (typeof value !== "string") return null;
  const body = value.replaceAll("\r\n", "\n").trim();
  if (!body || body.length > 2000 || /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(body)) return null;
  const links = body.match(/https?:\/\//gi) || [];
  return links.length <= 5 ? body : null;
}

export function cleanNickname(value) {
  if (typeof value !== "string") return null;
  const nickname = value.replace(/\s+/g, " ").trim();
  if (nickname.length < 2 || nickname.length > 40) return null;
  if (/[\u0000-\u001f<>]/.test(nickname)) return null;
  return nickname;
}

export function allowedOrigins(env) {
  return new Set(
    String(env.ALLOWED_ORIGINS || "")
      .split(",")
      .map((value) => value.trim().replace(/\/$/, ""))
      .filter(Boolean),
  );
}

export function safeReturnTo(value, env) {
  try {
    const url = new URL(value || env.SITE_URL);
    if (!allowedOrigins(env).has(url.origin)) return null;
    if (url.protocol !== "https:" && !["localhost", "127.0.0.1"].includes(url.hostname)) return null;
    url.hash = "";
    return url.toString();
  } catch (_error) {
    return null;
  }
}
