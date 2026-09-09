/* HanaBio's adapter for the official giscus widget. No GitHub access tokens
 * enter this module; the Worker verifies identity before accepting a session. */
(() => {
  "use strict";
  const ORIGIN = "https://giscus.app";
  const SESSION = "hanabio-comment-session-v1";
  const GUEST = "hanabio-comment-guest-v1";
  const GISCUS = "giscus-session";
  const PAIR = "hanabio-comment-giscus-pair-v1";
  const PENDING = "hanabio-comment-giscus-login-v1";
  const read = (storage, key) => { try { return JSON.parse(storage.getItem(key) || "null"); } catch { return null; } };
  const write = (storage, key, value) => value === null ? storage.removeItem(key) : storage.setItem(key, JSON.stringify(value));
  const digest = async value => Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value))), b => b.toString(16).padStart(2, "0")).join("");

  // Consume callback parameters before mounting any third-party widget. Never
  // let the stock client import an unbound ?giscus= value into localStorage.
  const callback = new URL(location.href);
  let returned = null;
  if (callback.searchParams.has("giscus") || callback.searchParams.has("hb-login")) {
    returned = { session: callback.searchParams.get("giscus"), nonce: callback.searchParams.get("hb-login"), path: callback.pathname };
    callback.searchParams.delete("giscus"); callback.searchParams.delete("hb-login");
    history.replaceState(history.state, "", callback.href);
  }

  class CommentAuth {
    constructor({ root, api, theme, snapshot, restore, changed, status }) {
      Object.assign(this, { root, api, theme, snapshot, restore, changed, status });
      this.abort = new AbortController();
      this.generation = 0;
      this.enabled = root.dataset.giscusSharedLogin !== "false" && Boolean(api);
      window.addEventListener("message", event => this.message(event), { signal: this.abort.signal });
      window.addEventListener("storage", event => {
        if ([SESSION, GISCUS, PAIR].includes(event.key) || event.key === null) {
          this.generation++;
          this.changed(read(localStorage, SESSION));
          this.mount();
        }
      }, { signal: this.abort.signal });
      window.addEventListener("pagehide", () => this.remember(), { signal: this.abort.signal });
    }
    remember() {
      const pending = read(sessionStorage, PENDING);
      if (pending && pending.nonce === this.nonce) write(sessionStorage, PENDING, { ...pending, draft: this.snapshot() });
    }
    prepare() {
      this.nonce = Array.from(crypto.getRandomValues(new Uint8Array(32)), b => b.toString(16).padStart(2, "0")).join("");
      const url = new URL(location.href);
      url.searchParams.delete("giscus"); url.searchParams.delete("hb-login");
      const canonical = url.href;
      url.searchParams.set("hb-login", this.nonce);
      this.returnUrl = url.href;
      write(sessionStorage, PENDING, { nonce: this.nonce, path: url.pathname, created: Date.now(), draft: this.snapshot() });
      return canonical;
    }
    async init() {
      const result = returned; returned = null;
      if (result) {
        const pending = read(sessionStorage, PENDING);
        write(sessionStorage, PENDING, null);
        if (!pending || pending.nonce !== result.nonce || pending.path !== result.path ||
            Date.now() - pending.created > 86400000 || pending.created > Date.now()) {
          this.status("登录回调无效或已过期，请从本站重新登录。", true);
        } else {
          this.restore(pending.draft);
          if (!result.session) this.status("已取消 GitHub 登录，草稿已保留。", true);
          else if (this.enabled) await this.exchange(result.session);
          else write(localStorage, GISCUS, result.session);
        }
      } else if (this.enabled) {
        const stored = read(localStorage, SESSION);
        const credential = read(localStorage, GISCUS);
        const pair = read(localStorage, PAIR);
        // Only renew credentials previously accepted by our bound callback.
        if (typeof credential === "string" && pair?.digest === await digest(credential) &&
            (!stored || Date.parse(stored.expires_at) <= Date.now())) await this.exchange(credential);
      }
      if (!this.abort.signal.aborted) this.mount();
    }
    async exchange(credential) {
      const generation = this.generation;
      try {
        const previous = read(localStorage, SESSION);
        const headers = { "Content-Type": "application/json" };
        if (previous?.token && Date.parse(previous.expires_at) > Date.now()) headers.Authorization = `Bearer ${previous.token}`;
        const response = await fetch(`${this.api}/v1/auth/giscus/exchange`, {
          method: "POST", headers, body: JSON.stringify({ session: credential }),
          signal: AbortSignal.any([this.abort.signal, AbortSignal.timeout(20000)]),
        });
        const payload = await response.json();
        if (!response.ok) throw Object.assign(new Error(payload.error || "共享登录暂不可用"), { status: response.status });
        if (!payload.session?.token || !payload.session?.commenter?.verified) throw new Error("共享登录响应无效");
        const fingerprint = await digest(credential);
        if (generation !== this.generation || this.abort.signal.aborted) return;
        if (previous && !previous.commenter?.verified) write(localStorage, GUEST, previous);
        write(localStorage, GISCUS, credential);
        write(localStorage, PAIR, { digest: fingerprint, commenterId: payload.session.commenter.id });
        write(localStorage, SESSION, payload.session);
        this.changed(payload.session);
        this.failed = false;
        this.status("GitHub 登录成功，两处评论均可使用。", false);
      } catch (error) {
        if (this.abort.signal.aborted || generation !== this.generation) return;
        this.failed = true;
        this.status(`${error.message}。可重新尝试，或使用侧栏的独立登录。`, true);
      }
    }
    start() {
      try {
        if (!this.returnUrl) this.prepare();
        this.remember();
        location.assign(`${ORIGIN}/api/oauth/authorize?redirect_uri=${encodeURIComponent(this.returnUrl)}`);
      } catch { this.status("无法保存登录状态，请允许本站使用会话存储后重试。", true); }
    }
    logout(githubOnly = false) {
      this.generation++;
      const current = read(localStorage, SESSION);
      if (current && !current.commenter?.verified) write(localStorage, GUEST, current);
      if (!githubOnly || current?.commenter?.verified) write(localStorage, SESSION, null);
      write(localStorage, GISCUS, null);
      write(localStorage, PAIR, null);
      this.changed(read(localStorage, SESSION));
      this.mount();
    }
    restoreGuest() {
      const guest = read(localStorage, GUEST);
      if (guest?.token && Date.parse(guest.expires_at) > Date.now()) {
        this.logout(); write(localStorage, SESSION, guest); this.changed(guest); return true;
      }
      return false;
    }
    mount() {
      if (this.abort.signal.aborted || this.root.dataset.giscusEnabled !== "true") return;
      const mount = this.root.querySelector(".hb-giscus__mount");
      if (!mount) return;
      let canonical;
      try { canonical = this.prepare(); }
      catch { this.status("无法保存登录状态，请允许本站使用会话存储后重试。", true); return; }
      const params = new URLSearchParams({
        origin: this.returnUrl, backLink: canonical, session: read(localStorage, GISCUS) || "",
        repo: this.root.dataset.giscusRepo, repoId: this.root.dataset.giscusRepoId,
        category: this.root.dataset.giscusCategory, categoryId: this.root.dataset.giscusCategoryId,
        term: this.root.dataset.hanabioPageId, strict: "1", reactionsEnabled: "1", emitMetadata: "0",
        inputPosition: "top", theme: this.theme(), description: document.title,
      });
      const frame = document.createElement("iframe");
      frame.className = "giscus-frame"; frame.title = "页面讨论";
      frame.src = `${ORIGIN}/zh-CN/widget?${params}`;
      frame.loading = "lazy"; frame.referrerPolicy = "no-referrer";
      frame.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms allow-top-navigation-by-user-activation");
      frame.style.cssText = "width:100%;border:0;min-height:160px;color-scheme:normal";
      this.frame = frame; mount.replaceChildren(frame);
    }
    message(event) {
      if (event.origin !== ORIGIN || event.source !== this.frame?.contentWindow || !event.data?.giscus) return;
      const data = event.data.giscus;
      if (Number.isFinite(data.resizeHeight) && data.resizeHeight > 0) this.frame.style.height = `${Math.min(data.resizeHeight, 100000)}px`;
      if (data.signOut || /Bad credentials|State has expired|Invalid state/i.test(data.error || "")) this.logout(true);
    }
    destroy() { this.remember(); this.generation++; this.abort.abort(); }
  }
  window.HanaBioCommentAuth = CommentAuth;
})();
