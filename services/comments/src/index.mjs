import { bearerToken, hashRateKey, proofChallenge, signToken, verifyToken } from "./security.mjs";
import {
  allowedOrigins,
  cleanBody,
  cleanNickname,
  FINGERPRINT_PATTERN,
  safeReturnTo,
  validateAnchor,
  validatePageId,
  validateRevision,
} from "./validation.mjs";

const SESSION_TTL = 30 * 24 * 60 * 60;
const WRITE_GRANT_TTL = 5 * 60;
const TRANSITION_TTL = 10 * 60;

function nowIso() {
  return new Date().toISOString();
}

function futureIso(seconds) {
  return new Date(Date.now() + seconds * 1000).toISOString();
}

function responseJson(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...headers },
  });
}

function errorResponse(status, error) {
  return responseJson({ error }, status);
}

async function requestJson(request) {
  const length = Number(request.headers.get("Content-Length") || 0);
  if (length > 1000000) throw Object.assign(new Error("请求体过大"), { status: 413 });
  if (!(request.headers.get("Content-Type") || "").toLowerCase().startsWith("application/json")) {
    throw Object.assign(new Error("请求体必须是 JSON"), { status: 415 });
  }
  const reader = request.body?.getReader();
  const chunks = [];
  let size = 0;
  if (reader) {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 1000000) {
        await reader.cancel();
        throw Object.assign(new Error("请求体过大"), { status: 413 });
      }
      chunks.push(value);
    }
  }
  try {
    const value = JSON.parse(await new Blob(chunks).text());
    if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid object");
    return value;
  } catch (_error) {
    throw Object.assign(new Error("请求体必须是 JSON"), { status: 400 });
  }
}

function corsOrigin(request, env) {
  const origin = request.headers.get("Origin");
  if (!origin) return "";
  return allowedOrigins(env).has(origin.replace(/\/$/, "")) ? origin : null;
}

function addCors(response, request, env) {
  // Redirect responses have immutable headers in the Fetch runtime.
  response = new Response(response.body, response);
  response.headers.set("Vary", "Origin");
  response.headers.set("Cache-Control", "no-store");
  const origin = corsOrigin(request, env);
  if (origin) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Vary", "Origin");
    response.headers.set("Access-Control-Allow-Headers", "Authorization, Content-Type");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    response.headers.set("Access-Control-Max-Age", "86400");
  }
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  return response;
}

function clientIp(request) {
  return request.headers.get("CF-Connecting-IP") || "local-development";
}

async function rateKey(request, env) {
  return hashRateKey(env.JWT_SECRET, `rate:${nowIso().slice(0, 10)}:${clientIp(request)}`);
}

async function enforceRateLimit(request, env, action, limit, windowSeconds) {
  const key = await rateKey(request, env);
  const now = Math.floor(Date.now() / 1000);
  const windowStart = Math.floor(now / windowSeconds) * windowSeconds;
  const expiresAt = new Date((windowStart + windowSeconds * 2) * 1000).toISOString();
  await env.DB.prepare(
    `INSERT INTO rate_limits(rate_key, action, window_start, count, expires_at)
     VALUES (?, ?, ?, 1, ?)
     ON CONFLICT(rate_key, action, window_start)
     DO UPDATE SET count = count + 1, expires_at = excluded.expires_at`,
  ).bind(key, action, windowStart, expiresAt).run();
  const row = await env.DB.prepare(
    "SELECT count FROM rate_limits WHERE rate_key = ? AND action = ? AND window_start = ?",
  ).bind(key, action, windowStart).first();
  if (Number(row?.count || 0) > limit) {
    throw Object.assign(new Error("操作过于频繁，请稍后再试"), { status: 429 });
  }
  return key;
}

async function verifyTurnstile(request, env, token) {
  if (typeof token !== "string" || !token || token.length > 2048) {
    throw Object.assign(new Error("请完成人机验证"), { status: 400 });
  }
  const form = new FormData();
  form.set("secret", env.TURNSTILE_SECRET_KEY);
  form.set("response", token);
  form.set("remoteip", clientIp(request));
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
    signal: AbortSignal.timeout(10000),
  });
  const payload = await response.json();
  const hostnames = new Set([...allowedOrigins(env)].map((origin) => new URL(origin).hostname));
  if (!response.ok || !payload.success || !hostnames.has(payload.hostname)) {
    throw Object.assign(new Error("人机验证失败或已过期，请重试"), { status: 400 });
  }
}

function publicCommenter(row) {
  return {
    id: row.id,
    display_name: row.display_name,
    avatar_url: row.avatar_url || "",
    profile_url: row.profile_url || "",
    verified: Boolean(row.verified),
    is_admin: Boolean(row.is_admin),
  };
}

async function createSession(env, commenter) {
  const expiresAt = futureIso(SESSION_TTL);
  const token = await signToken(env.JWT_SECRET, {
    scope: "session",
    sub: commenter.id,
    kind: commenter.kind,
    display_name: commenter.display_name,
    verified: Boolean(commenter.verified),
    is_admin: Boolean(commenter.is_admin),
    jti: crypto.randomUUID(),
  }, SESSION_TTL);
  return { token, expires_at: expiresAt, commenter: publicCommenter(commenter) };
}

async function createWriteGrant(env, session) {
  return signToken(env.JWT_SECRET, {
    scope: "write-comment",
    sub: session.sub,
    jti: crypto.randomUUID(),
  }, WRITE_GRANT_TTL);
}

async function requireSession(request, env, { optional = false } = {}) {
  const token = bearerToken(request);
  if (!token && optional) return null;
  if (!token) throw Object.assign(new Error("请先选择访客或 GitHub 身份"), { status: 401 });
  let session;
  try {
    session = await verifyToken(env.JWT_SECRET, token, { scope: "session" });
  } catch (_error) {
    throw Object.assign(new Error("评论身份已失效，请重新验证"), { status: 401 });
  }
  const commenter = await env.DB.prepare("SELECT * FROM commenters WHERE id = ?").bind(session.sub).first();
  if (!commenter) throw Object.assign(new Error("评论身份已失效，请重新验证"), { status: 401 });
  session.is_admin = commenter.kind === "github" && adminGithubIds(env).has(commenter.external_id);
  return session;
}

async function requireAdmin(request, env) {
  const session = await requireSession(request, env);
  if (!session.is_admin) throw Object.assign(new Error("需要管理员权限"), { status: 403 });
  return session;
}

async function verifyDeploySecret(request, env) {
  const token = bearerToken(request);
  if (!token || !env.DEPLOY_SECRET) return false;
  const [actual, expected] = await Promise.all([
    hashRateKey(env.JWT_SECRET, `deploy:${token}`),
    hashRateKey(env.JWT_SECRET, `deploy:${env.DEPLOY_SECRET}`),
  ]);
  return actual === expected;
}

async function guestSession(request, env) {
  await enforceRateLimit(request, env, "guest-session", 8, 600);
  const body = await requestJson(request);
  const nickname = cleanNickname(body.nickname);
  if (!nickname) throw Object.assign(new Error("昵称需为 2–40 个可见字符"), { status: 400 });
  await verifyTurnstile(request, env, body.turnstile_token);
  const id = crypto.randomUUID();
  const externalId = crypto.randomUUID();
  const createdAt = nowIso();
  await env.DB.prepare(
    `INSERT INTO commenters(id, kind, external_id, display_name, verified, is_admin, created_at, updated_at)
     VALUES (?, 'guest', ?, ?, 0, 0, ?, ?)`,
  ).bind(id, externalId, nickname, createdAt, createdAt).run();
  const commenter = await env.DB.prepare("SELECT * FROM commenters WHERE id = ?").bind(id).first();
  const session = await createSession(env, commenter);
  const sessionClaims = await verifyToken(env.JWT_SECRET, session.token, { scope: "session" });
  return responseJson({ session, write_grant: await createWriteGrant(env, sessionClaims) }, 201);
}

async function writeGrant(request, env) {
  const session = await requireSession(request, env);
  await enforceRateLimit(request, env, "write-grant", 30, 86400);
  const body = await requestJson(request);
  await verifyTurnstile(request, env, body.turnstile_token);
  return responseJson({ write_grant: await createWriteGrant(env, session) }, 201);
}

function adminGithubIds(env) {
  return new Set(String(env.ADMIN_GITHUB_IDS || "").split(",").map((item) => item.trim()).filter(Boolean));
}

async function githubStart(request, env) {
  await enforceRateLimit(request, env, "github-start", 20, 600);
  const challenge = new URL(request.url).searchParams.get("challenge");
  if (!/^[A-Za-z0-9_-]{43}$/.test(challenge || "")) {
    throw Object.assign(new Error("请从网站重新发起 GitHub 登录"), { status: 400 });
  }
  const returnTo = safeReturnTo(new URL(request.url).searchParams.get("return_to"), env);
  if (!returnTo) throw Object.assign(new Error("登录返回地址不被允许"), { status: 400 });
  const state = crypto.randomUUID();
  const createdAt = nowIso();
  await env.DB.prepare(
    "INSERT INTO oauth_states(state, return_to, created_at, expires_at) VALUES (?, ?, ?, ?)",
  ).bind(state, returnTo, createdAt, futureIso(600)).run();
  await env.DB.prepare("INSERT INTO oauth_proofs(state, challenge, expires_at) VALUES (?, ?, ?)")
    .bind(state, challenge, futureIso(600)).run();
  const callback = new URL("/v1/auth/github/callback", request.url).toString();
  const authorize = new URL("https://github.com/login/oauth/authorize");
  authorize.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  authorize.searchParams.set("redirect_uri", callback);
  authorize.searchParams.set("scope", "read:user");
  authorize.searchParams.set("state", state);
  return Response.redirect(authorize.toString(), 302);
}

async function githubCallback(request, env) {
  const url = new URL(request.url);
  const stateValue = url.searchParams.get("state") || "";
  const code = url.searchParams.get("code") || "";
  const state = await env.DB.prepare(
    "DELETE FROM oauth_states WHERE state = ? AND expires_at > ? RETURNING *",
  ).bind(stateValue, nowIso()).first();
  if (!state || !code) throw Object.assign(new Error("GitHub 登录状态无效或已过期"), { status: 400 });

  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    signal: AbortSignal.timeout(10000),
    method: "POST",
    headers: { "Accept": "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });
  const tokenPayload = await tokenResponse.json();
  if (!tokenResponse.ok || !tokenPayload.access_token) {
    throw Object.assign(new Error("GitHub 授权交换失败"), { status: 502 });
  }
  const userResponse = await fetch("https://api.github.com/user", {
    signal: AbortSignal.timeout(10000),
    headers: {
      "Accept": "application/vnd.github+json",
      "Authorization": `Bearer ${tokenPayload.access_token}`,
      "User-Agent": "HanaBio-Comments",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  const user = await userResponse.json();
  if (!userResponse.ok || !user.id || !user.login) {
    throw Object.assign(new Error("无法读取 GitHub 用户身份"), { status: 502 });
  }
  const externalId = String(user.id);
  const timestamp = nowIso();
  const isAdmin = adminGithubIds(env).has(externalId) ? 1 : 0;
  await env.DB.prepare(
    `INSERT INTO commenters(id, kind, external_id, display_name, avatar_url, profile_url, verified, is_admin, created_at, updated_at)
     VALUES (?, 'github', ?, ?, ?, ?, 1, ?, ?, ?)
     ON CONFLICT(kind, external_id) DO UPDATE SET
       display_name = excluded.display_name,
       avatar_url = excluded.avatar_url,
       profile_url = excluded.profile_url,
       is_admin = excluded.is_admin,
       updated_at = excluded.updated_at`,
  ).bind(
    crypto.randomUUID(), externalId, user.login, user.avatar_url || "", user.html_url || "",
    isAdmin, timestamp, timestamp,
  ).run();
  const commenter = await env.DB.prepare(
    "SELECT * FROM commenters WHERE kind = 'github' AND external_id = ?",
  ).bind(externalId).first();
  const session = await createSession(env, commenter);
  const exchangeCode = crypto.randomUUID();
  await env.DB.prepare(
    "INSERT INTO auth_exchanges(code, session_json, created_at, expires_at) VALUES (?, ?, ?, ?)",
  ).bind(exchangeCode, JSON.stringify(session), timestamp, futureIso(60)).run();
  await env.DB.prepare("UPDATE oauth_proofs SET exchange_code = ?, expires_at = ? WHERE state = ?")
    .bind(exchangeCode, futureIso(60), stateValue).run();
  const returnUrl = new URL(state.return_to);
  returnUrl.hash = `comment-auth=${encodeURIComponent(exchangeCode)}`;
  return Response.redirect(returnUrl.toString(), 302);
}

async function githubExchange(request, env) {
  const body = await requestJson(request);
  let challenge;
  try { challenge = await proofChallenge(body.verifier); } catch (_error) {
    throw Object.assign(new Error("登录浏览器验证失败，请重新登录"), { status: 400 });
  }
  const row = await env.DB.prepare(
    `DELETE FROM auth_exchanges WHERE code = ? AND expires_at > ?
     AND EXISTS (SELECT 1 FROM oauth_proofs WHERE exchange_code = auth_exchanges.code AND challenge = ? AND expires_at > ?)
     RETURNING *`,
  ).bind(body.code || "", nowIso(), challenge, nowIso()).first();
  if (!row) throw Object.assign(new Error("GitHub 登录交换码无效或已过期"), { status: 400 });
  await env.DB.prepare("DELETE FROM oauth_proofs WHERE exchange_code = ?").bind(body.code).run();
  return responseJson({ session: JSON.parse(row.session_json) });
}

async function listComments(request, env, pageId) {
  if (!validatePageId(pageId)) throw Object.assign(new Error("页面 ID 非法"), { status: 400 });
  const session = await requireSession(request, env, { optional: true }).catch(() => null);
  const threadsResult = await env.DB.prepare(
    `SELECT id, page_id, anchor_start, anchor_end, anchor_fingerprint, anchor_quote, status,
            created_revision, updated_revision, created_at, updated_at
     FROM threads WHERE page_id = ? ORDER BY created_at ASC`,
  ).bind(pageId).all();
  const rows = threadsResult.results || [];
  if (!rows.length) return responseJson({ page_id: pageId, threads: [] });
  const commentsResult = await env.DB.prepare(
    `SELECT c.*, u.id AS author_id, u.display_name, u.avatar_url, u.profile_url, u.verified, u.is_admin
     FROM comments c JOIN commenters u ON u.id = c.commenter_id JOIN threads t ON t.id = c.thread_id
     WHERE t.page_id = ? AND (c.status != 'hidden' OR ? = 1)
     ORDER BY c.created_at ASC`,
  ).bind(pageId, session?.is_admin ? 1 : 0).all();
  const byThread = new Map(rows.map((row) => [row.id, []]));
  for (const row of commentsResult.results || []) {
    byThread.get(row.thread_id)?.push({
      id: row.id,
      body: row.status === "deleted" ? "" : row.body,
      status: row.status,
      version: row.version,
      created_at: row.created_at,
      edited_at: row.edited_at,
      author: {
        id: row.author_id,
        display_name: row.display_name,
        avatar_url: row.avatar_url || "",
        profile_url: row.profile_url || "",
        verified: Boolean(row.verified),
        is_admin: Boolean(row.is_admin),
      },
    });
  }
  return responseJson({
    page_id: pageId,
    threads: rows.map((row) => ({
      id: row.id,
      status: row.status,
      anchor: {
        start: row.anchor_start,
        end: row.anchor_end,
        fingerprint: row.anchor_fingerprint,
        quote: row.anchor_quote,
      },
      created_revision: row.created_revision,
      updated_revision: row.updated_revision,
      comments: byThread.get(row.id) || [],
    })),
  });
}

async function resolveAnchor(env, pageId, revision, anchor) {
  const state = await env.DB.prepare("SELECT * FROM site_state WHERE id = 1").first();
  if (!state?.current_revision) {
    throw Object.assign(new Error("评论服务尚未激活站点版本"), { status: 409 });
  }
  if (revision === state.current_revision) return { anchor, status: "active", revision: state.current_revision };
  if (revision === state.previous_revision && state.transition_until > nowIso()) {
    const mapping = await env.DB.prepare(
      `SELECT * FROM revision_mappings
       WHERE from_revision = ? AND to_revision = ? AND page_id = ? AND from_fingerprint = ?`,
    ).bind(revision, state.current_revision, pageId, anchor.fingerprint).first();
    if (!mapping) {
      return { anchor, status: "active", revision: state.current_revision };
    }
    if (mapping.status === "orphaned") {
      return { anchor, status: "orphaned", revision: state.current_revision };
    }
    return {
      status: "active",
      revision: state.current_revision,
      anchor: {
        start: mapping.to_start,
        end: mapping.to_end,
        fingerprint: mapping.to_fingerprint,
        quote: mapping.to_quote,
      },
    };
  }
  throw Object.assign(new Error("页面版本已过期，请刷新后再评论"), { status: 409 });
}

async function consumeWriteGrant(request, env, session, token) {
  let grant;
  try {
    grant = await verifyToken(env.JWT_SECRET, token, { scope: "write-comment" });
  } catch (_error) {
    throw Object.assign(new Error("发表授权无效或已过期，请重新完成人机验证"), { status: 401 });
  }
  if (grant.sub !== session.sub || !grant.jti) {
    throw Object.assign(new Error("发表授权与当前身份不匹配"), { status: 403 });
  }
  const result = await env.DB.prepare(
    "INSERT OR IGNORE INTO used_write_grants(jti, commenter_id, used_at) VALUES (?, ?, ?)",
  ).bind(grant.jti, session.sub, nowIso()).run();
  if (!result.meta?.changes) {
    throw Object.assign(new Error("发表授权已经使用，请重新完成人机验证"), { status: 409 });
  }
}

async function createComment(request, env) {
  const session = await requireSession(request, env);
  const body = await requestJson(request);
  if (!validatePageId(body.page_id) || !validateRevision(body.build_revision) || !validateAnchor(body.anchor)) {
    throw Object.assign(new Error("页面或段落锚点非法"), { status: 400 });
  }
  const commentBody = cleanBody(body.body);
  if (!commentBody) throw Object.assign(new Error("评论需为 1–2000 字纯文本，且最多包含 5 个链接"), { status: 400 });
  if (body.request_id !== undefined && !/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/.test(body.request_id)) {
    throw Object.assign(new Error("提交标识非法"), { status: 400 });
  }
  const commentId = body.request_id || crypto.randomUUID();
  const previous = await env.DB.prepare(
    "SELECT c.commenter_id, c.body, t.page_id FROM comments c JOIN threads t ON t.id = c.thread_id WHERE c.id = ?",
  ).bind(commentId).first();
  if (previous) {
    if (previous.commenter_id !== session.sub || previous.body !== commentBody || previous.page_id !== body.page_id) {
      throw Object.assign(new Error("提交标识已使用，请重新撰写评论"), { status: 409 });
    }
    return responseJson({ status: "created", id: commentId }, 201);
  }
  await enforceRateLimit(request, env, "comment", 30, 86400);
  const page = await env.DB.prepare("SELECT page_id FROM pages WHERE page_id = ?").bind(body.page_id).first();
  if (!page) throw Object.assign(new Error("评论服务中尚未登记此页面"), { status: 409 });
  const resolved = await resolveAnchor(env, body.page_id, body.build_revision, body.anchor);
  await consumeWriteGrant(request, env, session, body.write_grant);
  const timestamp = nowIso();
  let thread = await env.DB.prepare(
    "SELECT id FROM threads WHERE page_id = ? AND anchor_fingerprint = ? AND status = ?",
  ).bind(body.page_id, resolved.anchor.fingerprint, resolved.status).first();
  if (!thread) {
    const candidateId = crypto.randomUUID();
    await env.DB.prepare(
      `INSERT OR IGNORE INTO threads(
        id, page_id, anchor_start, anchor_end, anchor_fingerprint, anchor_quote, status,
        created_revision, updated_revision, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    ).bind(
      candidateId, body.page_id, resolved.anchor.start, resolved.anchor.end,
      resolved.anchor.fingerprint, resolved.anchor.quote, resolved.status,
      body.build_revision, resolved.revision, timestamp, timestamp,
    ).run();
    thread = await env.DB.prepare(
      "SELECT id FROM threads WHERE page_id = ? AND anchor_fingerprint = ? AND status = ?",
    ).bind(body.page_id, resolved.anchor.fingerprint, resolved.status).first();
  }
  if (!thread?.id) throw new Error("无法创建评论线程");
  await env.DB.prepare(
    `INSERT OR IGNORE INTO comments(id, thread_id, commenter_id, body, status, version, created_at)
     VALUES (?, ?, ?, ?, 'published', 1, ?)`,
  ).bind(commentId, thread.id, session.sub, commentBody, timestamp).run();
  const inserted = await env.DB.prepare("SELECT commenter_id, body, thread_id FROM comments WHERE id = ?").bind(commentId).first();
  if (inserted?.commenter_id !== session.sub || inserted.body !== commentBody || inserted.thread_id !== thread.id) {
    throw Object.assign(new Error("提交标识已使用，请重新撰写评论"), { status: 409 });
  }
  return responseJson({ status: "created", id: commentId }, 201);
}

async function commentRecord(env, id) {
  return env.DB.prepare(
    `SELECT c.*, u.id AS author_id FROM comments c
     JOIN commenters u ON u.id = c.commenter_id WHERE c.id = ?`,
  ).bind(id).first();
}

async function editComment(request, env, id) {
  const session = await requireSession(request, env);
  const body = await requestJson(request);
  const content = cleanBody(body.body);
  if (!content || !Number.isInteger(body.version)) throw Object.assign(new Error("评论内容或版本非法"), { status: 400 });
  const row = await commentRecord(env, id);
  if (!row) throw Object.assign(new Error("找不到评论"), { status: 404 });
  if (row.author_id !== session.sub && !session.is_admin) throw Object.assign(new Error("不能编辑其他人的评论"), { status: 403 });
  if (row.status !== "published") throw Object.assign(new Error("当前评论状态不可编辑"), { status: 409 });
  const result = await env.DB.prepare(
    `UPDATE comments SET body = ?, version = version + 1, edited_at = ?
     WHERE id = ? AND version = ? AND status = 'published'`,
  ).bind(content, nowIso(), id, body.version).run();
  if (!result.meta?.changes) throw Object.assign(new Error("评论已在其他位置更新，请刷新后重试"), { status: 409 });
  return responseJson({ status: "updated" });
}

async function deleteComment(request, env, id) {
  const session = await requireSession(request, env);
  const body = await requestJson(request);
  if (!Number.isInteger(body.version)) throw Object.assign(new Error("评论版本非法"), { status: 400 });
  const row = await commentRecord(env, id);
  if (!row) throw Object.assign(new Error("找不到评论"), { status: 404 });
  if (row.author_id !== session.sub && !session.is_admin) throw Object.assign(new Error("不能删除其他人的评论"), { status: 403 });
  const result = await env.DB.prepare(
    `UPDATE comments SET body = '', status = 'deleted', version = version + 1, edited_at = ?
     WHERE id = ? AND version = ? AND status != 'deleted'`,
  ).bind(nowIso(), id, body.version).run();
  if (!result.meta?.changes) throw Object.assign(new Error("评论已更新或删除，请刷新后重试"), { status: 409 });
  return responseJson({ status: "deleted" });
}

async function reportComment(request, env, id) {
  const reporterKey = await enforceRateLimit(request, env, "report", 10, 86400);
  const body = await requestJson(request);
  const reason = typeof body.reason === "string" ? body.reason.trim() : "";
  if (!reason || reason.length > 300) throw Object.assign(new Error("举报原因需为 1–300 字"), { status: 400 });
  const comment = await env.DB.prepare("SELECT id FROM comments WHERE id = ?").bind(id).first();
  if (!comment) throw Object.assign(new Error("找不到评论"), { status: 404 });
  await env.DB.prepare(
    `INSERT OR IGNORE INTO reports(id, comment_id, reporter_key, reason, created_at)
     VALUES (?, ?, ?, ?, ?)`,
  ).bind(crypto.randomUUID(), id, reporterKey, reason, nowIso()).run();
  return responseJson({ status: "reported" }, 201);
}

async function auditAdmin(env, session, action, targetType, targetId, details) {
  await env.DB.prepare(
    `INSERT INTO admin_audit(id, administrator_id, action, target_type, target_id, details_json, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
  ).bind(crypto.randomUUID(), session.sub, action, targetType, targetId, JSON.stringify(details), nowIso()).run();
}

async function reattachThread(request, env, id) {
  const session = await requireAdmin(request, env);
  const body = await requestJson(request);
  if (!validateRevision(body.build_revision) || !validateAnchor(body.anchor)) {
    throw Object.assign(new Error("新锚点或版本非法"), { status: 400 });
  }
  const result = await env.DB.prepare(
    `UPDATE threads SET anchor_start = ?, anchor_end = ?, anchor_fingerprint = ?, anchor_quote = ?,
       status = 'active', updated_revision = ?, updated_at = ? WHERE id = ?`,
  ).bind(
    body.anchor.start, body.anchor.end, body.anchor.fingerprint, body.anchor.quote,
    body.build_revision, nowIso(), id,
  ).run();
  if (!result.meta?.changes) throw Object.assign(new Error("找不到评论线程"), { status: 404 });
  await auditAdmin(env, session, "reattach", "thread", id, body.anchor);
  return responseJson({ status: "reattached" });
}

async function moderateComment(request, env, id) {
  const session = await requireAdmin(request, env);
  const body = await requestJson(request);
  if (!["published", "hidden"].includes(body.status)) throw Object.assign(new Error("管理状态非法"), { status: 400 });
  const result = await env.DB.prepare(
    "UPDATE comments SET status = ?, version = version + 1, edited_at = ? WHERE id = ? AND status != 'deleted'",
  ).bind(body.status, nowIso(), id).run();
  if (!result.meta?.changes) throw Object.assign(new Error("找不到可管理的评论"), { status: 404 });
  await auditAdmin(env, session, `set-${body.status}`, "comment", id, {});
  return responseJson({ status: body.status });
}

function validateDeployPayload(body) {
  if (!body || !validateRevision(body.revision) || !validateRevision(body.from_revision, { optional: true })) return false;
  if (!Array.isArray(body.pages) || body.pages.length > 2000) return false;
  if (!Array.isArray(body.mappings) || body.mappings.length > 10000) return false;
  for (const page of body.pages) {
    if (!page || typeof page !== "object") return false;
    if (!validatePageId(page.page_id) || typeof page.path !== "string" || !page.path || page.path.length > 500 ||
        typeof page.title !== "string" || !page.title || page.title.length > 300) return false;
  }
  for (const mapping of body.mappings) {
    if (!mapping || typeof mapping !== "object") return false;
    if (!validatePageId(mapping.page_id) || !FINGERPRINT_PATTERN.test(mapping.from_fingerprint || "") ||
        !["active", "orphaned"].includes(mapping.status)) return false;
    if (mapping.status === "active" && !validateAnchor(mapping.to)) return false;
    if (mapping.status === "orphaned" && mapping.to != null) return false;
  }
  if (new Set(body.pages.map((page) => page.page_id)).size !== body.pages.length) return false;
  if (new Set(body.mappings.map((mapping) => `${mapping.page_id}:${mapping.from_fingerprint}`)).size !== body.mappings.length) return false;
  return true;
}

async function prepareDeploy(request, env) {
  if (!(await verifyDeploySecret(request, env))) throw Object.assign(new Error("部署认证失败"), { status: 401 });
  const body = await requestJson(request);
  if (!validateDeployPayload(body)) throw Object.assign(new Error("部署迁移负载非法"), { status: 400 });
  const current = await env.DB.prepare("SELECT current_revision FROM site_state WHERE id = 1").first();
  if (current?.current_revision && body.from_revision !== current.current_revision) {
    throw Object.assign(new Error("迁移起始版本与服务端当前版本不一致"), { status: 409 });
  }
  await env.DB.prepare(
    `INSERT INTO pending_deploys(revision, from_revision, payload_json, created_at, expires_at)
     VALUES (?, ?, ?, ?, ?)
     ON CONFLICT(revision) DO UPDATE SET payload_json = excluded.payload_json,
       from_revision = excluded.from_revision, created_at = excluded.created_at, expires_at = excluded.expires_at`,
  ).bind(body.revision, body.from_revision || null, JSON.stringify(body), nowIso(), futureIso(86400)).run();
  return responseJson({ status: "prepared", revision: body.revision }, 201);
}

async function deployState(request, env) {
  if (!(await verifyDeploySecret(request, env))) throw Object.assign(new Error("部署认证失败"), { status: 401 });
  const state = await env.DB.prepare(
    "SELECT current_revision, previous_revision, transition_until, updated_at FROM site_state WHERE id = 1",
  ).first();
  return responseJson({
    current_revision: state?.current_revision || "",
    previous_revision: state?.previous_revision || "",
    transition_until: state?.transition_until || "",
    updated_at: state?.updated_at || "",
  });
}

async function activateDeploy(request, env) {
  if (!(await verifyDeploySecret(request, env))) throw Object.assign(new Error("部署认证失败"), { status: 401 });
  const body = await requestJson(request);
  if (!validateRevision(body.revision)) throw Object.assign(new Error("部署版本非法"), { status: 400 });
  const current = await env.DB.prepare("SELECT current_revision FROM site_state WHERE id = 1").first();
  if (current?.current_revision === body.revision) return responseJson({ status: "activated", revision: body.revision });
  const pending = await env.DB.prepare(
    "SELECT * FROM pending_deploys WHERE revision = ? AND expires_at > ?",
  ).bind(body.revision, nowIso()).first();
  if (!pending) throw Object.assign(new Error("找不到待激活迁移或迁移已过期"), { status: 404 });
  const payload = JSON.parse(pending.payload_json);
  if ((current?.current_revision || "") !== (payload.from_revision || "")) {
    throw Object.assign(new Error("站点版本已变化，请重新准备迁移"), { status: 409 });
  }
  const pagesJson = JSON.stringify(payload.pages);
  const mappingsJson = JSON.stringify(payload.mappings);
  const timestamp = nowIso();
  await env.DB.batch([
    // The existing id=1 CHECK makes this a transaction-local compare-and-swap.
    // A concurrent activation rolls the entire batch back rather than overwriting it.
    env.DB.prepare("UPDATE site_state SET id = CASE WHEN current_revision IS ? THEN 1 ELSE 0 END WHERE id = 1")
      .bind(current?.current_revision || null),
    env.DB.prepare(
      `INSERT INTO pages(page_id, path, title, created_at, updated_at)
       SELECT json_extract(value, '$.page_id'), json_extract(value, '$.path'),
              json_extract(value, '$.title'), ?, ? FROM json_each(?) WHERE 1
       ON CONFLICT(page_id) DO UPDATE SET path = excluded.path, title = excluded.title, updated_at = excluded.updated_at`,
    ).bind(timestamp, timestamp, pagesJson),
    env.DB.prepare(
      `INSERT OR REPLACE INTO revision_mappings(
         id, from_revision, to_revision, page_id, from_fingerprint,
         to_start, to_end, to_fingerprint, to_quote, status, created_at
       )
       SELECT lower(hex(randomblob(16))), ?, ?,
              json_extract(value, '$.page_id'), json_extract(value, '$.from_fingerprint'),
              json_extract(value, '$.to.start'), json_extract(value, '$.to.end'),
              json_extract(value, '$.to.fingerprint'), json_extract(value, '$.to.quote'),
              json_extract(value, '$.status'), ?
       FROM json_each(?)`,
    ).bind(payload.from_revision || "", payload.revision, timestamp, mappingsJson),
    env.DB.prepare(
      `UPDATE threads SET
         anchor_start = (SELECT json_extract(value, '$.to.start') FROM json_each(?)
           WHERE json_extract(value, '$.page_id') = threads.page_id
             AND json_extract(value, '$.from_fingerprint') = threads.anchor_fingerprint
             AND json_extract(value, '$.status') = 'active'),
         anchor_end = (SELECT json_extract(value, '$.to.end') FROM json_each(?)
           WHERE json_extract(value, '$.page_id') = threads.page_id
             AND json_extract(value, '$.from_fingerprint') = threads.anchor_fingerprint
             AND json_extract(value, '$.status') = 'active'),
         anchor_fingerprint = (SELECT json_extract(value, '$.to.fingerprint') FROM json_each(?)
           WHERE json_extract(value, '$.page_id') = threads.page_id
             AND json_extract(value, '$.from_fingerprint') = threads.anchor_fingerprint
             AND json_extract(value, '$.status') = 'active'),
         anchor_quote = (SELECT json_extract(value, '$.to.quote') FROM json_each(?)
           WHERE json_extract(value, '$.page_id') = threads.page_id
             AND json_extract(value, '$.from_fingerprint') = threads.anchor_fingerprint
             AND json_extract(value, '$.status') = 'active'),
         updated_revision = ?, updated_at = ?
       WHERE status = 'active' AND EXISTS (SELECT 1 FROM json_each(?)
         WHERE json_extract(value, '$.page_id') = threads.page_id
           AND json_extract(value, '$.from_fingerprint') = threads.anchor_fingerprint
           AND json_extract(value, '$.status') = 'active')`,
    ).bind(mappingsJson, mappingsJson, mappingsJson, mappingsJson, payload.revision, timestamp, mappingsJson),
    env.DB.prepare(
      `UPDATE threads SET status = 'orphaned', updated_revision = ?, updated_at = ?
       WHERE status = 'active' AND updated_revision != ? AND EXISTS (SELECT 1 FROM json_each(?)
         WHERE json_extract(value, '$.page_id') = threads.page_id
           AND json_extract(value, '$.from_fingerprint') = threads.anchor_fingerprint
           AND json_extract(value, '$.status') = 'orphaned')`,
    ).bind(payload.revision, timestamp, payload.revision, mappingsJson),
    env.DB.prepare(
      `UPDATE site_state SET previous_revision = current_revision, current_revision = ?,
       transition_until = ?, updated_at = ? WHERE id = 1`,
    ).bind(payload.revision, futureIso(TRANSITION_TTL), timestamp),
    env.DB.prepare("DELETE FROM pending_deploys WHERE revision = ?").bind(payload.revision),
  ]);
  return responseJson({ status: "activated", revision: payload.revision });
}

async function route(request, env) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/$/, "") || "/";
  if (request.method === "OPTIONS") {
    if (corsOrigin(request, env) === null) return errorResponse(403, "来源不被允许");
    return new Response(null, { status: 204 });
  }
  if (corsOrigin(request, env) === null) return errorResponse(403, "来源不被允许");
  if (request.method === "GET" && path === "/") return responseJson({ service: "HanaBio Comments", status: "ok" });
  if (request.method === "POST" && path === "/v1/sessions/guest") return guestSession(request, env);
  if (request.method === "POST" && path === "/v1/write-grants") return writeGrant(request, env);
  if (request.method === "GET" && path === "/v1/auth/github/start") return githubStart(request, env);
  if (request.method === "GET" && path === "/v1/auth/github/callback") return githubCallback(request, env);
  if (request.method === "POST" && path === "/v1/auth/github/exchange") return githubExchange(request, env);
  if (request.method === "POST" && path === "/v1/comments") return createComment(request, env);
  if (request.method === "GET" && path === "/v1/deploy/state") return deployState(request, env);
  if (request.method === "POST" && path === "/v1/deploy/prepare") return prepareDeploy(request, env);
  if (request.method === "POST" && path === "/v1/deploy/activate") return activateDeploy(request, env);

  let match = path.match(/^\/v1\/pages\/([^/]+)\/comments$/);
  if (request.method === "GET" && match) return listComments(request, env, decodeURIComponent(match[1]));
  match = path.match(/^\/v1\/comments\/([^/]+)$/);
  if (request.method === "PATCH" && match) return editComment(request, env, decodeURIComponent(match[1]));
  if (request.method === "DELETE" && match) return deleteComment(request, env, decodeURIComponent(match[1]));
  match = path.match(/^\/v1\/comments\/([^/]+)\/reports$/);
  if (request.method === "POST" && match) return reportComment(request, env, decodeURIComponent(match[1]));
  match = path.match(/^\/v1\/admin\/threads\/([^/]+)\/reattach$/);
  if (request.method === "POST" && match) return reattachThread(request, env, decodeURIComponent(match[1]));
  match = path.match(/^\/v1\/admin\/comments\/([^/]+)$/);
  if (request.method === "PATCH" && match) return moderateComment(request, env, decodeURIComponent(match[1]));
  return errorResponse(404, "接口不存在");
}

async function cleanup(env) {
  const now = nowIso();
  const grantCutoff = new Date(Date.now() - 7 * 86400000).toISOString();
  await env.DB.batch([
    env.DB.prepare("DELETE FROM oauth_states WHERE expires_at <= ?").bind(now),
    env.DB.prepare("DELETE FROM oauth_proofs WHERE expires_at <= ?").bind(now),
    env.DB.prepare("DELETE FROM auth_exchanges WHERE expires_at <= ?").bind(now),
    env.DB.prepare("DELETE FROM pending_deploys WHERE expires_at <= ?").bind(now),
    env.DB.prepare("DELETE FROM rate_limits WHERE expires_at <= ?").bind(now),
    env.DB.prepare("DELETE FROM used_write_grants WHERE used_at <= ?").bind(grantCutoff),
  ]);
}

export default {
  async fetch(request, env) {
    let response;
    try {
      response = await route(request, env);
    } catch (error) {
      const status = Number.isInteger(error.status) ? error.status : 500;
      if (status >= 500) console.error("HanaBio comments request failed", error);
      response = errorResponse(status, status >= 500 ? "评论服务暂时不可用" : error.message);
    }
    return addCors(response, request, env);
  },
  async scheduled(_controller, env, context) {
    context.waitUntil(cleanup(env));
  },
};

export { cleanup, route };
