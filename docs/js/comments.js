(() => {
  "use strict";

  const SESSION_KEY = "hanabio-comment-session-v1";
  const TURNSTILE_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
  const GISCUS_SRC = "https://giscus.app/client.js";
  const svg = {
    comment: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v12H8l-4 4V4Zm2 2v9.17L7.17 14H18V6H6Z"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5Z"/></svg>',
  };

  let active = null;
  let turnstilePromise = null;
  let themeObserver = null;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function button(className, label, icon) {
    const node = element("button", className);
    node.type = "button";
    node.setAttribute("aria-label", label);
    if (icon) node.innerHTML = icon;
    return node;
  }

  function loadSession() {
    try {
      const value = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
      if (!value || !value.token || !value.commenter) return null;
      if (value.expires_at && Date.parse(value.expires_at) <= Date.now()) {
        localStorage.removeItem(SESSION_KEY);
        return null;
      }
      return value;
    } catch (_error) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }
  }

  function saveSession(value) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(value));
  }

  async function fetchJson(state, path, options = {}) {
    const headers = new Headers(options.headers || {});
    headers.set("Accept", "application/json");
    if (options.body) headers.set("Content-Type", "application/json");
    if (state.session?.token) headers.set("Authorization", `Bearer ${state.session.token}`);
    const response = await fetch(`${state.api}${path}`, {
      ...options,
      headers,
      signal: state.abort.signal,
    });
    let payload = null;
    try {
      payload = await response.json();
    } catch (_error) {
      payload = { error: "评论服务返回了无法解析的响应" };
    }
    if (!response.ok) {
      const error = new Error(payload?.error || `评论服务请求失败（${response.status}）`);
      error.status = response.status;
      throw error;
    }
    return payload;
  }

  function getBlockAnchor(block) {
    return {
      start: Number(block.dataset.blockStart),
      end: Number(block.dataset.blockEnd),
      fingerprint: block.dataset.blockFingerprint,
      quote: block.innerText.trim().slice(0, 1000),
    };
  }

  function sameAnchor(left, right) {
    if (!left || !right) return false;
    return left.fingerprint === right.fingerprint || (
      Number(left.start) === Number(right.start) && Number(left.end) === Number(right.end)
    );
  }

  function findBlock(state, anchor) {
    return state.blocks.find((block) => sameAnchor(getBlockAnchor(block), anchor));
  }

  function threadForAnchor(state, anchor) {
    return state.threads.find((thread) => thread.status === "active" && sameAnchor(thread.anchor, anchor));
  }

  function commentsForAnchor(state, anchor) {
    return threadForAnchor(state, anchor)?.comments?.filter((comment) => comment.status !== "hidden").length || 0;
  }

  function updateBlocks(state) {
    for (const block of state.blocks) {
      const count = commentsForAnchor(state, getBlockAnchor(block));
      block.dataset.hanabioCommentCount = String(count);
      block.classList.toggle("hb-commented-block", count > 0);
    }
    const total = state.threads.reduce(
      (sum, thread) => sum + (thread.comments || []).filter((comment) => comment.status !== "hidden").length,
      0,
    );
    state.openButton.querySelector("span").textContent = total ? `本页评论 ${total}` : "本页评论";
    if (state.blockButtonTarget) updateBlockButton(state, state.blockButtonTarget);
  }

  function updateBlockButton(state, block) {
    const count = commentsForAnchor(state, getBlockAnchor(block));
    const label = count ? `${count} 条评论` : "评论此处";
    state.blockButton.querySelector("span").textContent = label;
    state.blockButton.setAttribute("aria-label", label);
  }

  function showBlockButton(state, block) {
    window.clearTimeout(state.blockButtonTimer);
    state.blockButtonTarget = block;
    updateBlockButton(state, block);
    const rect = block.getBoundingClientRect();
    state.blockButton.style.top = `${Math.max(52, Math.min(window.innerHeight - 44, rect.top + 6))}px`;
    state.blockButton.style.left = `${Math.max(8, Math.min(window.innerWidth - 104, rect.right + 8))}px`;
    state.blockButton.hidden = false;
  }

  function hideBlockButton(state) {
    window.clearTimeout(state.blockButtonTimer);
    state.blockButtonTimer = window.setTimeout(() => {
      state.blockButton.hidden = true;
      state.blockButtonTarget = null;
    }, 100);
  }

  function setSelected(state, block, { scroll = false } = {}) {
    state.selectedBlock?.classList.remove("hb-comment-block--selected");
    state.selectedBlock = block || null;
    if (block) {
      block.classList.add("hb-comment-block--selected");
      if (scroll) block.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    renderDrawer(state);
  }

  function openDrawer(state) {
    state.returnFocus = document.activeElement;
    state.drawer.hidden = false;
    state.backdrop.hidden = false;
    requestAnimationFrame(() => {
      state.drawer.classList.add("hb-comment-drawer--open");
      state.backdrop.classList.add("hb-comment-backdrop--open");
    });
    state.openButton.setAttribute("aria-expanded", "true");
    document.body.classList.add("hb-comments-open");
    state.closeButton.focus({ preventScroll: true });
  }

  function closeDrawer(state) {
    state.drawer.classList.remove("hb-comment-drawer--open");
    state.backdrop.classList.remove("hb-comment-backdrop--open");
    state.openButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("hb-comments-open");
    window.setTimeout(() => {
      if (!state.drawer.classList.contains("hb-comment-drawer--open")) {
        state.drawer.hidden = true;
        state.backdrop.hidden = true;
        const target = state.returnFocus?.isConnected && state.returnFocus !== document.body
          ? state.returnFocus
          : state.openButton;
        target.focus({ preventScroll: true });
      }
    }, 220);
  }

  function formatTime(value) {
    try {
      return new Intl.DateTimeFormat("zh-CN", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date(value));
    } catch (_error) {
      return value;
    }
  }

  function renderAuthor(comment) {
    const row = element("div", "hb-comment__author");
    if (comment.author?.avatar_url) {
      const image = document.createElement("img");
      image.src = comment.author.avatar_url;
      image.alt = "";
      image.loading = "lazy";
      image.referrerPolicy = "no-referrer";
      row.append(image);
    }
    const name = element("strong", "", comment.author?.display_name || "访客");
    row.append(name);
    row.append(element(
      "span",
      comment.author?.verified ? "hb-comment-badge hb-comment-badge--verified" : "hb-comment-badge",
      comment.author?.verified ? "GitHub 已验证" : "访客",
    ));
    row.append(element("time", "", formatTime(comment.created_at)));
    return row;
  }

  function canEdit(state, comment) {
    return Boolean(
      state.session?.commenter?.id &&
      (state.session.commenter.id === comment.author?.id || state.session.commenter.is_admin),
    );
  }

  function renderComment(state, thread, comment) {
    const article = element("article", "hb-comment");
    article.id = `comment-${comment.id}`;
    article.tabIndex = -1;
    article.append(renderAuthor(comment));
    const body = element("p", "hb-comment__body", comment.status === "deleted" ? "此评论已由作者删除。" : comment.body);
    article.append(body);
    const actions = element("div", "hb-comment__actions");
    const link = element("a", "", "复制链接");
    link.href = `#comment-${comment.id}`;
    link.addEventListener("click", async () => {
      const url = new URL(window.location.href);
      url.hash = `comment-${comment.id}`;
      await navigator.clipboard?.writeText(url.toString());
    }, { signal: state.abort.signal });
    actions.append(link);
    if (comment.status === "published" && canEdit(state, comment)) {
      const edit = button("hb-text-button", "编辑评论");
      edit.textContent = "编辑";
      edit.addEventListener("click", () => beginEdit(state, thread, comment, article), { signal: state.abort.signal });
      const remove = button("hb-text-button hb-text-button--danger", "删除评论");
      remove.textContent = "删除";
      remove.addEventListener("click", () => deleteComment(state, comment), { signal: state.abort.signal });
      actions.append(edit, remove);
    } else if (comment.status === "published") {
      const report = button("hb-text-button", "举报评论");
      report.textContent = "举报";
      report.addEventListener("click", () => reportComment(state, comment), { signal: state.abort.signal });
      actions.append(report);
    }
    article.append(actions);
    return article;
  }

  function beginEdit(state, thread, comment, article) {
    article.querySelector(".hb-comment__body").hidden = true;
    article.querySelector(".hb-comment__actions").hidden = true;
    const form = element("form", "hb-comment-edit");
    const textarea = document.createElement("textarea");
    textarea.maxLength = 2000;
    textarea.required = true;
    textarea.value = comment.body;
    const save = element("button", "md-button md-button--primary", "保存");
    save.type = "submit";
    const cancel = element("button", "md-button", "取消");
    cancel.type = "button";
    form.append(textarea, save, cancel);
    cancel.addEventListener("click", () => renderDrawer(state), { signal: state.abort.signal });
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      save.disabled = true;
      try {
        await fetchJson(state, `/v1/comments/${encodeURIComponent(comment.id)}`, {
          method: "PATCH",
          body: JSON.stringify({ body: textarea.value, version: comment.version }),
        });
        await loadComments(state);
      } catch (error) {
        showStatus(state, error.message, true);
        save.disabled = false;
      }
    }, { signal: state.abort.signal });
    article.append(form);
    textarea.focus();
  }

  async function deleteComment(state, comment) {
    if (!window.confirm("确定删除这条评论吗？评论位置会保留为删除标记。")) return;
    try {
      await fetchJson(state, `/v1/comments/${encodeURIComponent(comment.id)}`, {
        method: "DELETE",
        body: JSON.stringify({ version: comment.version }),
      });
      await loadComments(state);
    } catch (error) {
      showStatus(state, error.message, true);
    }
  }

  async function reportComment(state, comment) {
    const reason = window.prompt("请简要说明举报原因（最多 300 字）：", "垃圾信息");
    if (!reason) return;
    try {
      await fetchJson(state, `/v1/comments/${encodeURIComponent(comment.id)}/reports`, {
        method: "POST",
        body: JSON.stringify({ reason: reason.slice(0, 300) }),
      });
      showStatus(state, "举报已提交，感谢反馈。", false);
    } catch (error) {
      showStatus(state, error.message, true);
    }
  }

  function renderThread(state, thread) {
    const card = element("section", `hb-comment-thread hb-comment-thread--${thread.status}`);
    const header = element("button", "hb-comment-thread__quote");
    header.type = "button";
    header.textContent = thread.status === "orphaned"
      ? `历史原文：${thread.anchor.quote || "原段落已变更"}`
      : thread.anchor.quote || "查看对应段落";
    header.addEventListener("click", () => {
      const block = findBlock(state, thread.anchor);
      if (block) setSelected(state, block, { scroll: true });
    }, { signal: state.abort.signal });
    card.append(header);
    const comments = element("div", "hb-comment-thread__comments");
    for (const comment of thread.comments || []) comments.append(renderComment(state, thread, comment));
    if (!(thread.comments || []).length) comments.append(element("p", "hb-comments-empty", "还没有评论。"));
    card.append(comments);
    return card;
  }

  function loadTurnstile() {
    if (window.turnstile) return Promise.resolve(window.turnstile);
    if (turnstilePromise) return turnstilePromise;
    turnstilePromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = TURNSTILE_SRC;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve(window.turnstile);
      script.onerror = () => reject(new Error("无法加载人机验证，请检查网络后重试"));
      document.head.append(script);
    });
    return turnstilePromise;
  }

  async function mountTurnstile(state, container, onToken) {
    try {
      const turnstile = await loadTurnstile();
      if (!container.isConnected || state.abort.signal.aborted) return;
      turnstile.render(container, {
        sitekey: state.siteKey,
        theme: currentTheme() === "dark" ? "dark" : "light",
        callback: onToken,
        "expired-callback": () => onToken(""),
        "error-callback": () => onToken(""),
      });
    } catch (error) {
      container.textContent = error.message;
      container.classList.add("hb-comment-form__error");
    }
  }

  function authSummary(state) {
    const row = element("div", "hb-comment-auth");
    const commenter = state.session?.commenter;
    if (!commenter) return row;
    row.append(element(
      "span",
      "",
      commenter.verified ? `${commenter.display_name} · GitHub 已验证` : `${commenter.display_name} · 访客`,
    ));
    const logout = button("hb-text-button", "退出评论身份");
    logout.textContent = "退出";
    logout.addEventListener("click", () => {
      localStorage.removeItem(SESSION_KEY);
      state.session = null;
      state.writeGrant = "";
      renderDrawer(state);
    }, { signal: state.abort.signal });
    row.append(logout);
    return row;
  }

  function renderGuestLogin(state, parent) {
    const form = element("form", "hb-comment-login");
    const label = element("label", "", "访客昵称");
    const nickname = document.createElement("input");
    nickname.name = "nickname";
    nickname.required = true;
    nickname.maxLength = 40;
    nickname.autocomplete = "nickname";
    label.append(nickname);
    const challenge = element("div", "hb-turnstile");
    let turnstileToken = "";
    const submit = element("button", "md-button md-button--primary", "以访客身份继续");
    submit.type = "submit";
    submit.disabled = true;
    const github = element("a", "md-button", "使用 GitHub 登录");
    github.href = `${state.api}/v1/auth/github/start?return_to=${encodeURIComponent(window.location.href)}`;
    form.append(label, challenge, submit, github);
    mountTurnstile(state, challenge, (token) => {
      turnstileToken = token;
      submit.disabled = !token;
    });
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      submit.disabled = true;
      try {
        const payload = await fetchJson(state, "/v1/sessions/guest", {
          method: "POST",
          body: JSON.stringify({ nickname: nickname.value, turnstile_token: turnstileToken }),
        });
        state.session = payload.session;
        state.writeGrant = payload.write_grant;
        saveSession(state.session);
        renderDrawer(state);
      } catch (error) {
        showStatus(state, error.message, true);
        submit.disabled = false;
      }
    }, { signal: state.abort.signal });
    parent.append(form);
  }

  function renderCommentForm(state, parent) {
    if (!state.selectedBlock) return;
    const section = element("section", "hb-comment-form");
    section.append(element("h3", "", "评论所选内容"));
    section.append(element("blockquote", "", getBlockAnchor(state.selectedBlock).quote));
    if (!state.session) {
      section.append(element("p", "hb-comment-form__hint", "无需邮箱。访客评论会标注为“访客”，也可选择 GitHub 已验证身份。"));
      renderGuestLogin(state, section);
      parent.append(section);
      return;
    }
    section.append(authSummary(state));
    const form = element("form", "hb-comment-compose");
    const textarea = document.createElement("textarea");
    textarea.required = true;
    textarea.maxLength = 2000;
    textarea.placeholder = "写下具体、友善且与本段内容有关的评论……";
    const count = element("span", "hb-comment-compose__count", "0 / 2000");
    textarea.addEventListener("input", () => {
      count.textContent = `${textarea.value.length} / 2000`;
    }, { signal: state.abort.signal });
    const challenge = element("div", "hb-turnstile");
    let turnstileToken = "";
    if (!state.writeGrant) {
      mountTurnstile(state, challenge, (token) => { turnstileToken = token; });
    } else {
      challenge.hidden = true;
    }
    const submit = element("button", "md-button md-button--primary", "发表评论");
    submit.type = "submit";
    form.append(textarea, count, challenge, submit);
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      submit.disabled = true;
      try {
        let grant = state.writeGrant;
        if (!grant) {
          if (!turnstileToken) throw new Error("请先完成人机验证");
          const payload = await fetchJson(state, "/v1/write-grants", {
            method: "POST",
            body: JSON.stringify({ turnstile_token: turnstileToken }),
          });
          grant = payload.write_grant;
        }
        const anchor = getBlockAnchor(state.selectedBlock);
        await fetchJson(state, "/v1/comments", {
          method: "POST",
          body: JSON.stringify({
            page_id: state.pageId,
            build_revision: state.revision,
            anchor,
            body: textarea.value,
            write_grant: grant,
          }),
        });
        state.writeGrant = "";
        await loadComments(state);
        showStatus(state, "评论已发表。", false);
      } catch (error) {
        showStatus(state, error.message, true);
        submit.disabled = false;
      }
    }, { signal: state.abort.signal });
    section.append(form);
    parent.append(section);
  }

  function renderDrawer(state) {
    const main = state.drawer.querySelector(".hb-comment-drawer__main");
    main.replaceChildren();
    if (state.loading) {
      main.append(element("p", "hb-comments-empty", "正在读取本页评论……"));
      return;
    }
    if (state.error) {
      main.append(element("p", "hb-comment-form__error", state.error));
      const retry = element("button", "md-button", "重试");
      retry.type = "button";
      retry.addEventListener("click", () => loadComments(state), { signal: state.abort.signal });
      main.append(retry);
    }

    const selectedAnchor = state.selectedBlock ? getBlockAnchor(state.selectedBlock) : null;
    const selectedThread = selectedAnchor ? threadForAnchor(state, selectedAnchor) : null;
    if (selectedThread) main.append(renderThread(state, selectedThread));

    const activeThreads = state.threads.filter(
      (thread) => thread.status === "active" && thread !== selectedThread,
    );
    const historical = state.threads.filter((thread) => thread.status === "orphaned");
    if (activeThreads.length) {
      main.append(element("h3", "hb-comment-drawer__section-title", "本页其他评论"));
      for (const thread of activeThreads) main.append(renderThread(state, thread));
    }
    if (historical.length) {
      main.append(element("h3", "hb-comment-drawer__section-title", "历史评论（原内容已变更）"));
      for (const thread of historical) main.append(renderThread(state, thread));
    }
    if (!state.threads.length && !state.selectedBlock && !state.error) {
      main.append(element("p", "hb-comments-empty", "本页还没有段落评论。点选正文中的评论按钮即可开始。"));
    }
    renderCommentForm(state, main);
  }

  function showStatus(state, message, error) {
    state.status.textContent = message;
    state.status.classList.toggle("hb-comment-status--error", Boolean(error));
    state.status.hidden = false;
    window.setTimeout(() => { state.status.hidden = true; }, 5000);
  }

  async function loadComments(state) {
    state.loading = true;
    state.error = "";
    renderDrawer(state);
    try {
      const payload = await fetchJson(state, `/v1/pages/${encodeURIComponent(state.pageId)}/comments`);
      state.threads = payload.threads || [];
    } catch (error) {
      state.error = `${error.message}。正文与页尾讨论不受影响。`;
    } finally {
      state.loading = false;
      updateBlocks(state);
      renderDrawer(state);
      handleCommentHash(state);
    }
  }

  function handleCommentHash(state) {
    const match = window.location.hash.match(/^#comment-(.+)$/);
    if (!match) return;
    const commentId = match[1];
    const thread = state.threads.find((item) => item.comments?.some((comment) => String(comment.id) === commentId));
    if (!thread) return;
    const block = findBlock(state, thread.anchor);
    if (block) setSelected(state, block, { scroll: true });
    openDrawer(state);
    window.setTimeout(() => document.getElementById(`comment-${commentId}`)?.focus(), 250);
  }

  async function exchangeGitHubCode(state) {
    const params = new URLSearchParams(window.location.hash.slice(1));
    const code = params.get("comment-auth");
    if (!code) return;
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    try {
      const payload = await fetchJson(state, "/v1/auth/github/exchange", {
        method: "POST",
        body: JSON.stringify({ code }),
      });
      state.session = payload.session;
      saveSession(state.session);
      showStatus(state, "GitHub 身份验证成功。", false);
    } catch (error) {
      showStatus(state, error.message, true);
    }
  }

  function currentTheme() {
    return document.body.getAttribute("data-md-color-scheme") === "slate" ||
      document.documentElement.getAttribute("data-color-scheme") === "dark"
      ? "dark"
      : "light";
  }

  function syncGiscusTheme() {
    const iframe = document.querySelector("iframe.giscus-frame");
    iframe?.contentWindow?.postMessage({
      giscus: { setConfig: { theme: currentTheme() } },
    }, "https://giscus.app");
  }

  function initThemeObserver() {
    if (themeObserver) return;
    themeObserver = new MutationObserver(syncGiscusTheme);
    themeObserver.observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-color-scheme"] });
  }

  function mountGiscus(root) {
    if (root.dataset.giscusEnabled !== "true") return;
    const mount = root.querySelector(".hb-giscus__mount");
    if (!mount) return;
    mount.replaceChildren();
    const script = document.createElement("script");
    script.src = GISCUS_SRC;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.dataset.repo = root.dataset.giscusRepo;
    script.dataset.repoId = root.dataset.giscusRepoId;
    script.dataset.category = root.dataset.giscusCategory;
    script.dataset.categoryId = root.dataset.giscusCategoryId;
    script.dataset.mapping = "specific";
    script.dataset.term = root.dataset.hanabioPageId;
    script.dataset.strict = "1";
    script.dataset.reactionsEnabled = "1";
    script.dataset.emitMetadata = "0";
    script.dataset.inputPosition = "top";
    script.dataset.theme = currentTheme();
    script.dataset.lang = "zh-CN";
    script.dataset.loading = "lazy";
    mount.append(script);
    initThemeObserver();
  }

  function createDrawer(state) {
    const openButton = button("hb-comments-button", "打开本页评论", svg.comment);
    openButton.setAttribute("aria-expanded", "false");
    const openLabel = element("span", "", "本页评论");
    openButton.append(openLabel);
    const blockButton = button("hb-comment-block-button", "评论此处", svg.comment);
    blockButton.hidden = true;
    blockButton.append(element("span", "", "评论此处"));
    const backdrop = element("div", "hb-comment-backdrop");
    backdrop.hidden = true;
    const drawer = element("aside", "hb-comment-drawer");
    drawer.hidden = true;
    drawer.setAttribute("role", "dialog");
    drawer.setAttribute("aria-modal", "true");
    drawer.setAttribute("aria-labelledby", "hb-comment-drawer-title");
    const header = element("header", "hb-comment-drawer__header");
    const title = element("h2", "", "本页评论");
    title.id = "hb-comment-drawer-title";
    const close = button("hb-comment-close", "关闭本页评论", svg.close);
    header.append(title, close);
    const status = element("p", "hb-comment-status");
    status.hidden = true;
    const main = element("div", "hb-comment-drawer__main");
    const footer = element("footer", "hb-comment-drawer__footer", "段落评论由 HanaBio 自托管；访客无需邮箱。 ");
    const source = element("a", "", "设计参考 OI Wiki Feedback System");
    source.href = "https://github.com/OI-wiki/feedback-sys";
    source.target = "_blank";
    source.rel = "noopener";
    footer.append(source);
    drawer.append(header, status, main, footer);
    state.root.append(openButton, blockButton, backdrop, drawer);
    state.openButton = openButton;
    state.blockButton = blockButton;
    state.backdrop = backdrop;
    state.drawer = drawer;
    state.closeButton = close;
    state.status = status;
    openButton.addEventListener("click", () => openDrawer(state), { signal: state.abort.signal });
    close.addEventListener("click", () => closeDrawer(state), { signal: state.abort.signal });
    backdrop.addEventListener("click", () => closeDrawer(state), { signal: state.abort.signal });
    blockButton.addEventListener("pointerenter", () => window.clearTimeout(state.blockButtonTimer), { signal: state.abort.signal });
    blockButton.addEventListener("pointerleave", () => hideBlockButton(state), { signal: state.abort.signal });
    blockButton.addEventListener("click", () => {
      if (!state.blockButtonTarget) return;
      setSelected(state, state.blockButtonTarget);
      openDrawer(state);
    }, { signal: state.abort.signal });
    document.addEventListener("keydown", (event) => {
      if (!drawer.classList.contains("hb-comment-drawer--open")) return;
      if (event.key === "Escape") {
        closeDrawer(state);
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = Array.from(drawer.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )).filter((node) => !node.hidden && node.getClientRects().length);
      if (!focusable.length) {
        event.preventDefault();
        close.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }, { signal: state.abort.signal });
  }

  function bindBlocks(state) {
    for (const block of state.blocks) {
      block.dataset.hanabioReviewEnabled = "true";
      block.addEventListener("pointerenter", () => showBlockButton(state, block), { signal: state.abort.signal });
      block.addEventListener("pointerleave", () => hideBlockButton(state), { signal: state.abort.signal });
      block.addEventListener("focusin", () => showBlockButton(state, block), { signal: state.abort.signal });
      block.addEventListener("click", (event) => {
        if (event.target.closest("a, button, input, textarea, select, summary")) return;
        if (window.getSelection()?.toString()) return;
        setSelected(state, block);
        openDrawer(state);
      }, { signal: state.abort.signal });
    }
  }

  async function initPage() {
    active?.abort.abort();
    document.body.classList.remove("hb-comments-open");
    const root = document.querySelector(".hb-comments-root");
    if (!root) return;
    mountGiscus(root);
    if (root.dataset.paragraphEnabled !== "true") return;
    const article = document.querySelector("article.md-content__inner") || document.querySelector(".md-content__inner");
    const blocks = article ? Array.from(article.querySelectorAll('[data-hanabio-comments="block"]')) : [];
    if (!blocks.length) return;
    const state = {
      root,
      api: root.dataset.commentApiUrl,
      siteKey: root.dataset.turnstileSiteKey,
      pageId: root.dataset.hanabioPageId,
      revision: root.dataset.buildRevision,
      blocks,
      threads: [],
      selectedBlock: null,
      session: loadSession(),
      writeGrant: "",
      abort: new AbortController(),
      loading: false,
      error: "",
      blockButtonTarget: null,
      blockButtonTimer: 0,
      returnFocus: null,
    };
    active = state;
    createDrawer(state);
    bindBlocks(state);
    await exchangeGitHubCode(state);
    await loadComments(state);
  }

  if (typeof document$ !== "undefined" && document$?.subscribe) {
    document$.subscribe(initPage);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPage, { once: true });
  } else {
    initPage();
  }
})();
