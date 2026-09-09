(() => {
  "use strict";

  const SESSION_KEY = "hanabio-comment-session-v1";
  const LOGIN_KEY = "hanabio-comment-login-v1";
  const MAX_BODY_LENGTH = 65535;
  const TURNSTILE_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
  const paths = {
    comment: "M4 4h16v12H8l-4 4V4Zm2 2v9.17L7.17 14H18V6H6Z",
    add: "M4 4h16v12H8l-4 4V4Zm2 2v9.17L7.17 14H18V6H6Zm5 1h2v2h2v2h-2v2h-2v-2H9V9h2V7Z",
    close: "m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5Z",
    link: "M10 7H7a5 5 0 0 0 0 10h3v-2H7a3 3 0 0 1 0-6h3V7Zm4 0v2h3a3 3 0 0 1 0 6h-3v2h3a5 5 0 0 0 0-10h-3Zm-6 4h8v2H8v-2Z",
    edit: "m17.7 3.3 3 3a1 1 0 0 1 0 1.4L8 20.4 3 21l.6-5L16.3 3.3a1 1 0 0 1 1.4 0ZM5.5 16.9l-.2 1.8 1.8-.2L17 8.6 15.4 7 5.5 16.9Z",
    remove: "M9 3h6l1 2h4v2H4V5h4l1-2Zm-3 6h12l-1 12H7L6 9Zm3 2 .6 8h1V11H9Zm4.4 0v8h1l.6-8h-1.6Z",
    report: "M5 3h2v2h12l-2 4 2 4H7v8H5V3Zm2 4v4h9l-1-2 1-2H7Z",
    info: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm-1 6h2v7h-2v-7Zm0-4h2v2h-2V6Z",
  };
  const svg = Object.fromEntries(Object.entries(paths).map(([name, path]) =>
    [name, `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${path}"/></svg>`]));
  const anchors = new WeakMap();
  let active = null;
  let sharedAuth = null;
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
    node.title = label;
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
      return null;
    }
  }

  function saveSession(value) {
    try {
      if (value) {
        localStorage.setItem(SESSION_KEY, JSON.stringify(value));
        if (!value.commenter?.verified) localStorage.setItem("hanabio-comment-guest-v1", JSON.stringify(value));
      }
      else localStorage.removeItem(SESSION_KEY);
    } catch (_error) {
      if (active) showStatus(active, "浏览器不允许保存身份；关闭本页后可能失去访客评论编辑权。", true);
    }
  }

  async function fetchJson(state, path, options = {}) {
    const headers = new Headers(options.headers || {});
    headers.set("Accept", "application/json");
    if (options.body) headers.set("Content-Type", "application/json");
    if (state.session?.token) headers.set("Authorization", `Bearer ${state.session.token}`);
    const response = await fetch(`${state.api}${path}`, {
      ...options,
      headers,
      signal: AbortSignal.any([state.abort.signal, AbortSignal.timeout(20000)]),
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
    if (!block) return null;
    if (!anchors.has(block)) anchors.set(block, {
      start: Number(block.dataset.blockStart),
      end: Number(block.dataset.blockEnd),
      fingerprint: block.dataset.blockFingerprint,
      quote: (block.innerText.trim().replace(/\s*¶$/, "") || Array.from(block.querySelectorAll("img[alt]"), image => image.alt).join(" ")).slice(0, 1000),
    });
    return anchors.get(block);
  }

  function findBlock(state, anchor) {
    return state.blocks.find(block => getBlockAnchor(block).fingerprint === anchor?.fingerprint) || null;
  }

  function threadForBlock(state, block) {
    return state.threads.find(thread => thread.status === "active" &&
      thread.anchor.fingerprint === getBlockAnchor(block)?.fingerprint);
  }

  function updateBlocks(state) {
    for (const block of state.blocks) {
      const count = threadForBlock(state, block)?.comments.length || 0;
      block.dataset.hanabioCommentCount = String(count);
      block.classList.toggle("hb-commented-block", count > 0);
      const marker = state.markers.get(block);
      marker.dataset.count = String(count);
      const label = count ? `查看本段的 ${count} 条评论` : "为本段添加评论";
      marker.setAttribute("aria-label", label);
      marker.title = label;
      marker.innerHTML = count ? svg.comment : svg.add;
      marker.append(element("span", "", count > 99 ? "99+" : count ? String(count) : ""));
    }
    const total = state.threads.reduce((sum, thread) => sum + thread.comments.length, 0);
    state.openButton.querySelector("span").textContent = total ? `本页评论 ${total}` : "本页评论";
    queueLayout(state);
  }

  function reducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function scrollBodyTo(state, block) {
    if (!block) return;
    const header = document.querySelector(".md-header")?.getBoundingClientRect().bottom || 48;
    const bottom = state.mobile.matches && state.isOpen ? state.drawer.getBoundingClientRect().top : window.innerHeight;
    const rect = block.getBoundingClientRect();
    const offset = Math.min(rect.height / 2, Math.max(0, (bottom - header) / 2 - 24));
    window.scrollBy({ top: rect.top + offset - (header + bottom) / 2,
      behavior: reducedMotion() ? "instant" : "smooth" });
  }

  function scrollCardTo(state, card, target = card) {
    if (!card || !state.isOpen) return;
    const main = state.main;
    const rect = target.getBoundingClientRect();
    const top = main.getBoundingClientRect().top;
    main.scrollTo({ top: main.scrollTop + rect.top - top - 12,
      behavior: reducedMotion() ? "instant" : "smooth" });
  }

  function selectBlock(state, block, { body = false, compose = false, threadId = null } = {}) {
    const nextId = threadId || threadForBlock(state, block)?.id || null;
    const changed = state.selectedBlock !== block || state.selectedThreadId !== nextId;
    state.selectedBlock?.classList.remove("hb-comment-block--selected");
    state.selectedBlock = block;
    state.selectedThreadId = nextId;
    block?.classList.add("hb-comment-block--selected");
    const wasOpen = state.isOpen;
    openDrawer(state);
    if (wasOpen && changed) renderDrawer(state);
    requestAnimationFrame(() => {
      if (state.abort.signal.aborted) return;
      const card = state.main.querySelector('[data-selected="true"]');
      if (body) scrollBodyTo(state, block);
      scrollCardTo(state, card);
      if (compose) {
        const input = card?.querySelector("textarea");
        input?.focus({ preventScroll: true });
        if (input) scrollCardTo(state, card, input);
      }
    });
  }

  function openDrawer(state) {
    if (state.abort.signal.aborted || state.isOpen) return;
    window.clearTimeout(state.closeTimer);
    state.returnFocus = document.activeElement;
    state.isOpen = true;
    state.drawer.hidden = false;
    state.openButton.setAttribute("aria-expanded", "true");
    document.body.classList.add("hb-comments-open");
    state.selectedBlock?.classList.add("hb-comment-block--selected");
    updateLayout(state);
    renderDrawer(state);
    requestAnimationFrame(() => {
      if (state.isOpen) state.drawer.classList.add("hb-comment-drawer--open");
    });
  }

  function clearWidgets(state) {
    for (const widget of state.widgets.splice(0)) window.turnstile?.remove(widget);
    state.challengeSize = null;
  }

  function closeDrawer(state) {
    if (!state.isOpen) return;
    const restoreFocus = state.drawer.contains(document.activeElement);
    state.isOpen = false;
    state.drawer.classList.remove("hb-comment-drawer--open");
    state.openButton.setAttribute("aria-expanded", "false");
    state.selectedBlock?.classList.remove("hb-comment-block--selected");
    document.body.classList.remove("hb-comments-open");
    state.content.style.removeProperty("--hb-comment-reserve");
    state.reserve = 0;
    clearWidgets(state);
    queueLayout(state);
    state.closeTimer = window.setTimeout(() => {
      if (state.abort.signal.aborted || state.isOpen) return;
      state.drawer.hidden = true;
      if (restoreFocus) (state.returnFocus?.isConnected ? state.returnFocus : state.openButton)?.focus({ preventScroll: true });
    }, 220);
  }

  function queueLayout(state) {
    if (state.layoutFrame || state.abort.signal.aborted) return;
    state.layoutFrame = requestAnimationFrame(() => {
      state.layoutFrame = 0;
      if (!state.abort.signal.aborted) updateLayout(state);
    });
  }

  function updateLayout(state) {
    const viewport = window.visualViewport;
    const height = viewport?.height || window.innerHeight;
    const bottom = Math.max(0, window.innerHeight - height - (viewport?.offsetTop || 0));
    document.body.style.setProperty("--hb-comment-visible-height", `${height}px`);
    document.body.style.setProperty("--hb-comment-bottom", `${bottom}px`);
    if (state.isOpen && !state.mobile.matches) {
      const originalRight = state.article.getBoundingClientRect().right + state.reserve;
      const reserve = Math.max(0, originalRight - (window.innerWidth - 350 - 36));
      if (Math.abs(reserve - state.reserve) > 0.5) {
        state.reserve = reserve;
        state.content.style.setProperty("--hb-comment-reserve", `${reserve}px`);
      }
    } else {
      state.reserve = 0;
      state.content.style.removeProperty("--hb-comment-reserve");
    }
    const header = document.querySelector(".md-header")?.getBoundingClientRect().bottom || 48;
    const visibleBottom = state.mobile.matches && state.isOpen ? height / 2 + (viewport?.offsetTop || 0) : window.innerHeight;
    const rightEdge = state.isOpen && !state.mobile.matches ? window.innerWidth - 350 : window.innerWidth;
    for (const [block, marker] of state.markers) {
      const rect = block.getBoundingClientRect();
      marker.hidden = !rect.width || rect.bottom < header || rect.top > visibleBottom - 28;
      if (marker.hidden) continue;
      marker.style.top = `${Math.max(header + 4, rect.top + 2)}px`;
      marker.style.left = `${Math.min(rightEdge - 32, rect.right + 4)}px`;
    }
    const challenge = state.main.querySelector(".hb-turnstile");
    if (state.widgets.length && challenge) {
      const size = state.mobile.matches && challenge.getBoundingClientRect().width < 300 ? "compact" : "flexible";
      if (size !== state.challengeSize) renderDrawer(state);
    }
  }

  function formatTime(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
  }

  function profileUrl(author) {
    if (!author?.verified || !author.profile_url) return null;
    try {
      const url = new URL(author.profile_url);
      return url.protocol === "https:" && url.hostname === "github.com" && !url.username && !url.password &&
        /^\/[a-zA-Z0-9-]+\/?$/.test(url.pathname) ? url.href : null;
    } catch (_error) { return null; }
  }

  function authorLink(author, className) {
    const url = profileUrl(author);
    const link = element(url ? "a" : "span", className);
    if (url) { link.href = url; link.target = "_blank"; link.rel = "noopener noreferrer"; }
    return link;
  }

  function canEdit(state, comment) {
    return Boolean(state.session?.commenter?.id &&
      (state.session.commenter.id === comment.author?.id || state.session.commenter.is_admin));
  }

  function sizeTextarea(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(240, Math.max(66, textarea.scrollHeight))}px`;
    textarea.style.overflowY = textarea.scrollHeight > 240 ? "auto" : "hidden";
    textarea.setCustomValidity(textarea.value.length > MAX_BODY_LENGTH ? "评论不能超过 65535 个字符" : "");
  }

  function renderComment(state, thread, comment) {
    const article = element("article", "hb-comment");
    article.id = `comment-${comment.id}`;
    article.tabIndex = -1;
    const avatar = authorLink(comment.author, "hb-comment__avatar");
    if (comment.author?.avatar_url) {
      const image = document.createElement("img");
      image.src = comment.author.avatar_url;
      image.alt = `${comment.author.display_name || "访客"}的头像`;
      image.loading = "lazy";
      image.referrerPolicy = "no-referrer";
      avatar.append(image);
    } else avatar.textContent = (comment.author?.display_name || "访客").slice(0, 1);
    const content = element("div", "hb-comment__content");
    const author = element("div", "hb-comment__author");
    const name = authorLink(comment.author, "hb-comment__name");
    name.textContent = comment.author?.display_name || "访客";
    name.title = name.textContent;
    author.append(name);
    if (!comment.author?.verified) author.append(element("span", "hb-comment-badge", "访客"));
    const time = element("time", "", formatTime(comment.created_at));
    time.dateTime = comment.created_at;
    time.title = comment.edited_at ? `${formatTime(comment.edited_at)} 编辑` : formatTime(comment.created_at);
    author.append(time, renderActions(state, thread, comment));
    content.append(author);
    if (state.edits.has(comment.id)) content.append(renderEdit(state, comment));
    else {
      const wrap = element("div", "hb-comment__body-wrap");
      const body = element("p", "hb-comment__body", comment.body);
      const expand = button("hb-comment__expand", "展开完整评论");
      expand.textContent = "展开";
      expand.hidden = true;
      expand.addEventListener("click", () => {
        const expanded = state.expanded.has(comment.id);
        if (expanded) state.expanded.delete(comment.id); else state.expanded.add(comment.id);
        wrap.dataset.collapsed = String(expanded);
        expand.textContent = expanded ? "展开" : "收起";
        expand.setAttribute("aria-expanded", String(!expanded));
      }, { signal: state.abort.signal });
      wrap.append(body, expand);
      content.append(wrap);
      requestAnimationFrame(() => {
        if (!body.isConnected) return;
        const long = body.scrollHeight > 250;
        wrap.dataset.collapsed = String(long && !state.expanded.has(comment.id));
        expand.hidden = !long;
        expand.textContent = state.expanded.has(comment.id) ? "收起" : "展开";
        expand.setAttribute("aria-expanded", String(state.expanded.has(comment.id)));
      });
    }
    article.append(avatar, content);
    return article;
  }

  function renderActions(state, thread, comment) {
    const actions = element("div", "hb-comment__actions");
    const copy = button("hb-text-button", "复制评论链接", svg.link);
    copy.addEventListener("click", async () => {
      const url = new URL(window.location.href);
      url.hash = `comment-${comment.id}`;
      try {
        await navigator.clipboard.writeText(url.href);
        showStatus(state, "评论链接已复制。", false);
      } catch (_error) {
        history.replaceState(null, "", url);
        showStatus(state, "请复制地址栏中的评论链接。", false);
      }
    }, { signal: state.abort.signal });
    actions.append(copy);
    if (canEdit(state, comment)) {
      const edit = button("hb-text-button", "编辑评论", svg.edit);
      edit.disabled = state.edits.has(comment.id);
      edit.addEventListener("click", () => {
        state.edits.set(comment.id, { body: comment.body, version: comment.version });
        renderDrawer(state);
        document.getElementById(`comment-${comment.id}`)?.querySelector("textarea")?.focus({ preventScroll: true });
      }, { signal: state.abort.signal });
      const remove = button("hb-text-button hb-text-button--danger", "删除评论", svg.remove);
      remove.addEventListener("click", () => confirmDelete(state, comment), { signal: state.abort.signal });
      actions.append(edit, remove);
    } else {
      const report = button("hb-text-button", "举报评论", svg.report);
      report.addEventListener("click", () => reportComment(state, comment), { signal: state.abort.signal });
      actions.append(report);
    }
    return actions;
  }

  function renderEdit(state, comment) {
    const form = element("form", "hb-comment-edit");
    const draft = state.edits.get(comment.id);
    const textarea = document.createElement("textarea");
    textarea.required = true;
    textarea.rows = 3;
    textarea.setAttribute("aria-label", "编辑评论正文");
    textarea.value = draft.body;
    textarea.readOnly = Boolean(draft.saving);
    textarea.addEventListener("input", () => { draft.body = textarea.value; sizeTextarea(textarea); });
    const controls = element("div", "hb-comment-compose__submit");
    const save = element("button", "md-button md-button--primary", "保存");
    save.type = "submit";
    save.disabled = Boolean(draft.saving);
    const cancel = button("md-button", "取消编辑");
    cancel.textContent = "取消";
    cancel.disabled = Boolean(draft.saving);
    cancel.addEventListener("click", () => { state.edits.delete(comment.id); renderDrawer(state); });
    controls.append(cancel, save);
    form.append(textarea, controls);
    form.addEventListener("submit", async event => {
      event.preventDefault();
      if (!validateBody(textarea)) return;
      save.disabled = true;
      draft.saving = true;
      textarea.readOnly = true;
      cancel.disabled = true;
      try {
        await fetchJson(state, `/v1/comments/${encodeURIComponent(comment.id)}`, {
          method: "PATCH", body: JSON.stringify({ body: textarea.value, version: draft.version }),
        });
        state.edits.delete(comment.id);
        await loadComments(state);
      } catch (error) {
        draft.saving = false;
        textarea.readOnly = false;
        cancel.disabled = false;
        showStatus(state, error.message, true);
        save.disabled = false;
        if (!form.isConnected) renderDrawer(state);
      }
    }, { signal: state.abort.signal });
    requestAnimationFrame(() => { if (textarea.isConnected) sizeTextarea(textarea); });
    return form;
  }

  function confirmDelete(state, comment) {
    const content = document.getElementById(`comment-${comment.id}`)?.querySelector(".hb-comment__content");
    if (!content || content.querySelector(".hb-comment-delete-confirm")) return;
    const row = element("div", "hb-comment-delete-confirm");
    row.setAttribute("role", "group");
    row.setAttribute("aria-label", "确认删除评论");
    const confirm = button("hb-text-button hb-text-button--danger", "确认删除评论");
    confirm.textContent = "删除";
    const cancel = button("hb-text-button", "取消删除"); cancel.textContent = "取消";
    cancel.addEventListener("click", () => row.remove());
    confirm.addEventListener("click", async () => {
      confirm.disabled = true; cancel.disabled = true;
      await deleteComment(state, comment);
      row.remove();
    });
    row.append(element("span", "", "删除这条评论？"), cancel, confirm);
    content.append(row);
    cancel.focus({ preventScroll: true });
  }

  async function deleteComment(state, comment) {
    try {
      await fetchJson(state, `/v1/comments/${encodeURIComponent(comment.id)}`, {
        method: "DELETE", body: JSON.stringify({ version: comment.version }),
      });
      ++state.loadGeneration;
      state.loading = false;
      state.threads = state.threads.map(thread => ({ ...thread, comments: thread.comments.filter(item => item.id !== comment.id) }))
        .filter(thread => thread.comments.length);
      state.edits.delete(comment.id);
      if (state.selectedThreadId && !state.threads.some(thread => thread.id === state.selectedThreadId)) {
        state.selectedBlock?.classList.remove("hb-comment-block--selected");
        state.selectedBlock = null;
        state.selectedThreadId = null;
      }
      updateBlocks(state);
      renderDrawer(state);
      if (window.location.hash === `#comment-${comment.id}`) history.replaceState(null, "", `${location.pathname}${location.search}`);
      await loadComments(state);
    } catch (error) { showStatus(state, error.message, true); }
  }

  async function reportComment(state, comment) {
    const reason = window.prompt("请简要说明举报原因（最多 300 字）：", "垃圾信息");
    if (!reason) return;
    try {
      await fetchJson(state, `/v1/comments/${encodeURIComponent(comment.id)}/reports`, {
        method: "POST", body: JSON.stringify({ reason: reason.slice(0, 300) }),
      });
      showStatus(state, "举报已提交，感谢反馈。", false);
    } catch (error) { showStatus(state, error.message, true); }
  }

  function hasSelection() {
    return Boolean(window.getSelection()?.toString().trim());
  }

  function renderThread(state, thread, selected) {
    const block = thread.status === "active" ? findBlock(state, thread.anchor) : null;
    const historical = !block;
    const card = element("section", `hb-comment-thread${historical ? " hb-comment-thread--orphaned" : ""}`);
    card.dataset.threadId = thread.id || "draft";
    card.dataset.selected = String(selected);
    const quote = button("hb-comment-thread__quote", "定位评论段落");
    quote.textContent = `${historical ? "历史原文 · " : ""}${thread.anchor.quote || "原段落已变更"}`;
    quote.title = quote.textContent;
    quote.addEventListener("click", () => selectBlock(state, block, { body: true, threadId: thread.id }));
    card.append(quote);
    const comments = element("div", "hb-comment-thread__comments");
    for (const comment of [...thread.comments].sort((a, b) => a.created_at.localeCompare(b.created_at))) {
      comments.append(renderComment(state, thread, comment));
    }
    card.append(comments);
    if (selected && block) card.append(renderCommentForm(state, block));
    card.addEventListener("click", event => {
      if (event.target.closest("a,button,input,textarea,select,form") || hasSelection()) return;
      selectBlock(state, block, { body: true, threadId: thread.id });
    });
    card.addEventListener("pointerenter", () => block?.classList.add("hb-comment-block--hovered"));
    card.addEventListener("pointerleave", () => block?.classList.remove("hb-comment-block--hovered"));
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
      const timer = window.setTimeout(() => script.onerror(), 15000);
      script.onload = () => {
        window.clearTimeout(timer);
        resolve(window.turnstile);
      };
      script.onerror = () => {
        window.clearTimeout(timer);
        script.remove();
        turnstilePromise = null;
        reject(new Error("无法加载人机验证，请检查网络后重试"));
      };
      document.head.append(script);
    });
    return turnstilePromise;
  }

  async function mountTurnstile(state, container, onToken) {
    try {
      const turnstile = await loadTurnstile();
      await new Promise(requestAnimationFrame);
      if (!container.isConnected || state.abort.signal.aborted) return;
      const size = state.mobile.matches && container.getBoundingClientRect().width < 300 ? "compact" : "flexible";
      state.challengeSize = size;
      container.dataset.size = size;
      const widget = turnstile.render(container, {
        sitekey: state.siteKey,
        size,
        theme: currentTheme() === "dark" ? "dark" : "light",
        callback: token => {
          onToken(token);
          if (token && state.status.textContent.startsWith("人机验证失败")) state.status.hidden = true;
        },
        "expired-callback": () => onToken(""),
        "error-callback": () => { onToken(""); showStatus(state, "人机验证失败，请稍候重试或重新打开表单。", true); },
      });
      state.widgets.push(widget);
      container.resetChallenge = () => { onToken(""); turnstile.reset(widget); };
    } catch (error) {
      container.textContent = error.message;
      container.classList.add("hb-comment-form__error");
      const retry = element("button", "hb-text-button", "重新加载验证");
      retry.type = "button";
      retry.addEventListener("click", () => {
        container.replaceChildren();
        container.classList.remove("hb-comment-form__error");
        mountTurnstile(state, container, onToken);
      }, { once: true, signal: state.abort.signal });
      container.append(retry);
    }
  }


  function validateBody(textarea) {
    textarea.setCustomValidity(!textarea.value.trim() ? "请写下你的评论" :
      textarea.value.length > MAX_BODY_LENGTH ? "评论不能超过 65535 个字符" : "");
    return textarea.reportValidity();
  }

  async function startGitHubLogin(state, block, independent = false) {
    if (sharedAuth?.enabled && !independent) { sharedAuth.start(); return; }
    try {
      const verifier = Array.from(crypto.getRandomValues(new Uint8Array(32)), byte => byte.toString(16).padStart(2, "0")).join("");
      const hash = new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier)));
      const challenge = btoa(String.fromCharCode(...hash)).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
      sessionStorage.setItem(LOGIN_KEY, JSON.stringify({ verifier, pageId: state.pageId,
        anchor: getBlockAnchor(block), drafts: Array.from(state.drafts), created: Date.now() }));
      window.location.assign(`${state.api}/v1/auth/github/start?return_to=${encodeURIComponent(location.href)}&challenge=${encodeURIComponent(challenge)}`);
    } catch (_error) { showStatus(state, "无法保存登录信息和草稿，请允许本站使用会话存储后重试。", true); }
  }

  function renderCommentForm(state, block) {
    const form = element("form", "hb-comment-form hb-comment-compose");
    const anchor = getBlockAnchor(block);
    const draftKey = anchor.fingerprint;
    const auth = element("div", "hb-comment-auth");
    const commenter = state.session?.commenter;
    if (commenter) {
      auth.append(element("span", "", `作为 ${commenter.display_name} 发表评论`));
      const logout = button("hb-text-button", "退出评论身份");
      logout.textContent = "退出";
      logout.addEventListener("click", () => {
        if (sharedAuth) sharedAuth.logout();
        else { saveSession(null); state.session = null; state.writeGrant = ""; renderDrawer(state); }
      });
      auth.append(logout);
    }
    form.append(auth);
    const textarea = document.createElement("textarea");
    textarea.rows = 3;
    textarea.placeholder = "写下你的评论";
    textarea.setAttribute("aria-label", "评论正文");
    textarea.value = state.drafts.get(draftKey) || "";
    textarea.readOnly = state.pending.has(draftKey);
    textarea.addEventListener("input", () => {
      state.drafts.set(draftKey, textarea.value);
      sharedAuth?.remember();
      state.submissions.delete(draftKey);
      sizeTextarea(textarea);
    });
    form.append(textarea);
    let nickname = null;
    if (!commenter) {
      const fields = element("div", "hb-comment-guest-fields");
      const label = element("label", "", "访客昵称");
      nickname = document.createElement("input");
      nickname.required = true;
      nickname.minLength = 2;
      nickname.maxLength = 40;
      nickname.autocomplete = "nickname";
      nickname.value = state.nickname || "";
      nickname.addEventListener("input", () => { state.nickname = nickname.value; });
      label.append(nickname); fields.append(label); form.append(fields);
    }
    const challenge = element("div", "hb-turnstile");
    const errorMessage = element("p", "hb-comment-form__error");
    errorMessage.setAttribute("role", "alert");
    errorMessage.hidden = true;
    form.append(challenge, errorMessage);
    let token = "";
    if (Date.now() >= state.grantExpires) state.writeGrant = "";
    const controls = element("div", commenter ? "hb-comment-compose__submit" : "hb-comment-login-options");
    const submit = element("button", "md-button md-button--primary", commenter ? "发表评论" : "访客登录");
    submit.type = "submit";
    submit.disabled = state.pending.has(draftKey);
    controls.append(submit);
    if (!commenter) {
      const github = element("a", "md-button", "GitHub 登录");
      github.href = sharedAuth?.enabled && sharedAuth.returnUrl
        ? `https://giscus.app/api/oauth/authorize?redirect_uri=${encodeURIComponent(sharedAuth.returnUrl)}`
        : "#";
      github.addEventListener("click", event => { event.preventDefault(); startGitHubLogin(state, block); });
      controls.append(github);
      if (sharedAuth?.failed) {
        const fallback = button("hb-text-button", "GitHub 独立登录");
        fallback.textContent = "独立登录";
        fallback.addEventListener("click", () => startGitHubLogin(state, block, true));
        controls.append(fallback);
      }
      let previousGuest = null;
      try { previousGuest = JSON.parse(localStorage.getItem("hanabio-comment-guest-v1") || "null"); } catch {}
      if (previousGuest?.token && Date.parse(previousGuest.expires_at) > Date.now()) {
        const restore = button("hb-text-button", "恢复之前的访客身份");
        restore.textContent = "恢复访客身份";
        restore.addEventListener("click", () => sharedAuth?.restoreGuest());
        controls.append(restore);
      }
    }
    form.append(controls);
    if (state.writeGrant && commenter) challenge.hidden = true;
    else if (state.isOpen) {
      submit.disabled = true;
      mountTurnstile(state, challenge, value => { token = value; submit.disabled = !value || state.pending.has(draftKey); });
    }
    form.addEventListener("submit", async event => {
      event.preventDefault();
      if (commenter && !validateBody(textarea)) return;
      if (state.pending.has(draftKey)) return;
      state.pending.add(draftKey);
      submit.disabled = true;
      textarea.readOnly = true;
      errorMessage.hidden = true;
      try {
        if (!commenter) {
          if (!token) throw new Error("请先完成人机验证");
          const payload = await fetchJson(state, "/v1/sessions/guest", {
            method: "POST", body: JSON.stringify({ nickname: nickname.value, turnstile_token: token }),
          });
          state.session = payload.session;
          state.writeGrant = payload.write_grant;
          state.grantExpires = Date.now() + 240000;
          saveSession(state.session);
          state.pending.delete(draftKey);
          renderDrawer(state);
          return;
        }
        let grant = Date.now() < state.grantExpires ? state.writeGrant : "";
        if (!grant) {
          if (!token) throw new Error("请先完成人机验证");
          const payload = await fetchJson(state, "/v1/write-grants", {
            method: "POST", body: JSON.stringify({ turnstile_token: token }),
          });
          grant = payload.write_grant;
        }
        if (!state.submissions.has(draftKey)) state.submissions.set(draftKey, crypto.randomUUID());
        await fetchJson(state, "/v1/comments", {
          method: "POST", body: JSON.stringify({ page_id: state.pageId, build_revision: state.revision,
            anchor, body: textarea.value, write_grant: grant, request_id: state.submissions.get(draftKey) }),
        });
        state.writeGrant = "";
        state.pending.delete(draftKey);
        state.drafts.delete(draftKey);
        state.submissions.delete(draftKey);
        await loadComments(state);
        showStatus(state, "评论已发表。", false);
      } catch (error) {
        state.pending.delete(draftKey);
        if (state.abort.signal.aborted) return;
        state.writeGrant = "";
        if (error.status === 401) { state.session = null; saveSession(null); renderDrawer(state); }
        else {
          errorMessage.textContent = error.message;
          errorMessage.hidden = false;
          textarea.readOnly = false;
          challenge.hidden = false;
          if (challenge.resetChallenge) challenge.resetChallenge();
          else mountTurnstile(state, challenge, value => { token = value; submit.disabled = !value; });
        }
        showStatus(state, error.message, true);
        if (!form.isConnected) renderDrawer(state);
      }
    }, { signal: state.abort.signal });
    requestAnimationFrame(() => { if (textarea.isConnected) sizeTextarea(textarea); });
    return form;
  }

  function renderDrawer(state) {
    const main = state.main;
    const scrollTop = main.scrollTop;
    clearWidgets(state);
    for (const block of state.blocks) block.classList.remove("hb-comment-block--hovered");
    main.replaceChildren();
    if (state.loading && !state.loaded) {
      main.append(element("p", "hb-comments-empty", "正在读取本页评论……"));
      return;
    }
    if (state.error) {
      const error = element("p", "hb-comment-form__error", state.error);
      const retry = button("md-button", "重试读取评论"); retry.textContent = "重试";
      retry.addEventListener("click", () => loadComments(state));
      main.append(error, retry);
    }
    const threads = [...state.threads];
    const selectedThread = threadForBlock(state, state.selectedBlock);
    if (selectedThread) state.selectedThreadId = selectedThread.id;
    if (state.selectedBlock && !selectedThread) threads.push({ id: null, status: "active",
      anchor: getBlockAnchor(state.selectedBlock), comments: [] });
    threads.sort((left, right) => {
      const a = left.status === "active" ? state.blocks.indexOf(findBlock(state, left.anchor)) : -1;
      const b = right.status === "active" ? state.blocks.indexOf(findBlock(state, right.anchor)) : -1;
      return (a < 0 ? Infinity : a) - (b < 0 ? Infinity : b) || (left.anchor.start - right.anchor.start);
    });
    for (const thread of threads) {
      const selected = state.selectedBlock ? thread.status === "active" && thread.anchor.fingerprint === getBlockAnchor(state.selectedBlock).fingerprint :
        Boolean(state.selectedThreadId && state.selectedThreadId === thread.id);
      main.append(renderThread(state, thread, selected));
    }
    if (!threads.length && !state.error) {
      const empty = element("div", "hb-comments-empty");
      const icon = element("span", ""); icon.innerHTML = svg.info;
      empty.append(icon, element("p", "", "本页暂无评论，点击段落右侧的评论按钮以添加评论"));
      main.append(empty);
    }
    main.scrollTop = scrollTop;
  }

  function showStatus(state, message, error) {
    if (state.abort.signal.aborted) return;
    state.status.textContent = message;
    state.status.classList.toggle("hb-comment-status--error", Boolean(error));
    state.status.hidden = false;
    window.clearTimeout(state.statusTimer);
    if (!error) state.statusTimer = window.setTimeout(() => { state.status.hidden = true; }, 4000);
  }

  async function loadComments(state) {
    const generation = ++state.loadGeneration;
    state.loading = true;
    state.error = "";
    if (!state.loaded) renderDrawer(state);
    try {
      const payload = await fetchJson(state, `/v1/pages/${encodeURIComponent(state.pageId)}/comments`);
      if (generation !== state.loadGeneration || state.abort.signal.aborted) return;
      // Older Workers may still return deleted/hidden rows. Neither belongs in the public UI or counts.
      state.threads = (payload.threads || []).map(thread => ({ ...thread,
        comments: (thread.comments || []).filter(comment => comment.status === "published"),
      })).filter(thread => thread.comments.length);
      state.loaded = true;
    } catch (error) {
      if (generation === state.loadGeneration) state.error = `${error.message}，请稍后重试。`;
    } finally {
      if (generation === state.loadGeneration && !state.abort.signal.aborted) {
        state.loading = false;
        updateBlocks(state);
        renderDrawer(state);
      }
    }
  }

  function handleCommentHash(state) {
    const match = window.location.hash.match(/^#comment-(.+)$/);
    if (!match || !state.loaded) return;
    const commentId = match[1];
    const thread = state.threads.find(item => item.comments.some(comment => String(comment.id) === commentId));
    if (!thread) { openDrawer(state); showStatus(state, "这条评论已删除或不可用。", true); return; }
    const block = thread.status === "active" ? findBlock(state, thread.anchor) : null;
    selectBlock(state, block, { body: true, threadId: thread.id });
    requestAnimationFrame(() => {
      const comment = document.getElementById(`comment-${commentId}`);
      if (!comment) return;
      scrollCardTo(state, comment.closest(".hb-comment-thread"), comment);
      comment.focus({ preventScroll: true });
      comment.classList.add("hb-comment--highlighted");
      window.setTimeout(() => comment.classList.remove("hb-comment--highlighted"), 1600);
    });
  }

  async function exchangeGitHubCode(state) {
    const code = new URLSearchParams(window.location.hash.slice(1)).get("comment-auth");
    if (!code) return;
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    try {
      const login = JSON.parse(sessionStorage.getItem(LOGIN_KEY) || "null");
      sessionStorage.removeItem(LOGIN_KEY);
      if (!login?.verifier || Date.now() - login.created > 600000) throw new Error("登录验证信息已过期，请重新发起登录。");
      if (login.pageId === state.pageId) {
        state.drafts = new Map(login.drafts || []);
        state.selectedBlock = findBlock(state, login.anchor);
      }
      const payload = await fetchJson(state, "/v1/auth/github/exchange", {
        method: "POST", body: JSON.stringify({ code, verifier: login.verifier }),
      });
      state.session = payload.session;
      saveSession(state.session);
      openDrawer(state);
      showStatus(state, "GitHub 身份验证成功。", false);
    } catch (error) { openDrawer(state); showStatus(state, error.message, true); }
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

  function createDrawer(state) {
    const open = button("hb-comments-button", "打开本页评论", svg.comment);
    open.setAttribute("aria-expanded", "false");
    open.setAttribute("aria-controls", "hb-comment-drawer");
    open.append(element("span", "", "本页评论"));
    const drawer = element("aside", "hb-comment-drawer");
    drawer.id = "hb-comment-drawer";
    drawer.hidden = true;
    drawer.setAttribute("role", "region");
    drawer.setAttribute("aria-labelledby", "hb-comment-drawer-title");
    const header = element("header", "hb-comment-drawer__header");
    const title = element("h2", "", "本页评论"); title.id = "hb-comment-drawer-title";
    const close = button("hb-comment-close", "关闭本页评论", svg.close);
    header.append(title, close);
    const status = element("p", "hb-comment-status");
    status.setAttribute("role", "status"); status.setAttribute("aria-live", "polite"); status.hidden = true;
    const main = element("div", "hb-comment-drawer__main");
    const markers = element("div", "hb-comment-markers");
    drawer.append(header, status, main);
    state.root.append(open, markers, drawer);
    Object.assign(state, { openButton: open, drawer, closeButton: close, main, status, markerLayer: markers });
    open.addEventListener("click", () => { openDrawer(state); close.focus({ preventScroll: true }); });
    close.addEventListener("click", () => closeDrawer(state));
    document.addEventListener("keydown", event => {
      if (state.isOpen && event.key === "Escape" && !event.isComposing) closeDrawer(state);
    }, { signal: state.abort.signal });
  }

  function bindBlocks(state) {
    const show = block => {
      window.clearTimeout(state.markerTimer);
      for (const [other, marker] of state.markers) marker.classList.toggle("hb-comment-block-button--visible", other === block);
    };
    const hide = block => {
      window.clearTimeout(state.markerTimer);
      state.markerTimer = window.setTimeout(() => state.markers.get(block)?.classList.remove("hb-comment-block-button--visible"), 140);
    };
    for (const block of state.blocks) {
      block.dataset.hanabioReviewEnabled = "true";
      const marker = button("hb-comment-block-button", "为本段添加评论", svg.add);
      marker.dataset.count = "0";
      marker.append(element("span", ""));
      state.markers.set(block, marker);
      state.markerLayer.append(marker);
      marker.addEventListener("pointerenter", () => show(block));
      marker.addEventListener("pointerleave", () => hide(block));
      marker.addEventListener("focus", () => show(block));
      marker.addEventListener("blur", () => hide(block));
      marker.addEventListener("click", () => selectBlock(state, block, { compose: true }));
      block.addEventListener("pointerenter", () => show(block), { signal: state.abort.signal });
      block.addEventListener("pointerleave", () => hide(block), { signal: state.abort.signal });
      block.addEventListener("focusin", () => show(block), { signal: state.abort.signal });
      block.addEventListener("click", event => {
        if (event.target.closest("a,button,input,textarea,select,summary,img,video,audio,iframe") || hasSelection()) return;
        if (threadForBlock(state, block)?.comments.length) selectBlock(state, block);
      }, { signal: state.abort.signal });
    }
    const schedule = () => queueLayout(state);
    window.addEventListener("resize", schedule, { signal: state.abort.signal });
    window.addEventListener("scroll", schedule, { passive: true, signal: state.abort.signal });
    window.visualViewport?.addEventListener("resize", schedule, { signal: state.abort.signal });
    window.visualViewport?.addEventListener("scroll", schedule, { signal: state.abort.signal });
    state.mobile.addEventListener("change", () => {
      state.content.style.removeProperty("--hb-comment-reserve"); state.reserve = 0; queueLayout(state);
    }, { signal: state.abort.signal });
    state.resizeObserver = new ResizeObserver(schedule);
    state.resizeObserver.observe(state.article);
    window.addEventListener("hashchange", () => handleCommentHash(state), { signal: state.abort.signal });
    document.body.classList.add("hb-has-paragraph-comments");
    queueLayout(state);
  }

  function cleanup(state) {
    if (!state) return;
    state.abort.abort();
    state.resizeObserver?.disconnect();
    clearWidgets(state);
    for (const timer of [state.closeTimer, state.statusTimer, state.markerTimer]) window.clearTimeout(timer);
    cancelAnimationFrame(state.layoutFrame);
    state.content.style.removeProperty("--hb-comment-reserve");
    for (const block of state.blocks) {
      block.classList.remove("hb-comment-block--selected", "hb-comment-block--hovered", "hb-commented-block");
      delete block.dataset.hanabioReviewEnabled;
    }
    state.markerLayer.remove(); state.drawer.remove(); state.openButton.remove();
    document.body.classList.remove("hb-comments-open", "hb-has-paragraph-comments");
    document.body.style.removeProperty("--hb-comment-visible-height");
    document.body.style.removeProperty("--hb-comment-bottom");
  }

  async function mountStandaloneAuth(root) {
    const notice = element("p", "hb-comment-status");
    notice.setAttribute("role", "status"); notice.hidden = true;
    root.prepend(notice);
    sharedAuth = new window.HanaBioCommentAuth({ root, api: root.dataset.commentApiUrl, theme: currentTheme,
      snapshot: () => ({}), restore: () => {}, changed: () => {},
      status: message => { notice.textContent = message; notice.hidden = false; },
    });
    await sharedAuth.init(); initThemeObserver();
  }

  async function initPage() {
    const root = document.querySelector(".hb-comments-root");
    if ((active?.root === root || sharedAuth?.root === root) && root?.isConnected) return;
    sharedAuth?.destroy(); sharedAuth = null;
    cleanup(active); active = null;
    if (!root) return;
    if (root.dataset.paragraphEnabled !== "true") { await mountStandaloneAuth(root); return; }
    const article = document.querySelector("article.md-content__inner") || document.querySelector(".md-content__inner");
    const candidates = article ? Array.from(article.querySelectorAll('[data-hanabio-comments="block"]')) : [];
    const frequencies = new Map();
    for (const block of candidates) frequencies.set(block.dataset.blockFingerprint, (frequencies.get(block.dataset.blockFingerprint) || 0) + 1);
    const blocks = candidates.filter(block => /[\p{L}\p{N}]/u.test(getBlockAnchor(block).quote) && frequencies.get(block.dataset.blockFingerprint) === 1);
    if (!blocks.length) { await mountStandaloneAuth(root); return; }
    const state = {
      root, article, content: article.closest(".md-content") || article,
      api: root.dataset.commentApiUrl, siteKey: root.dataset.turnstileSiteKey,
      pageId: root.dataset.hanabioPageId, revision: root.dataset.buildRevision, blocks,
      threads: [], selectedBlock: null, selectedThreadId: null, session: loadSession(),
      writeGrant: "", grantExpires: 0, drafts: new Map(), edits: new Map(), expanded: new Set(),
      submissions: new Map(), pending: new Set(), widgets: [], markers: new Map(), abort: new AbortController(),
      mobile: window.matchMedia("(max-width: 960px)"), reserve: 0, layoutFrame: 0,
      loading: false, loaded: false, loadGeneration: 0, error: "", isOpen: false,
    };
    active = state;
    createDrawer(state); bindBlocks(state);
    {
      sharedAuth = new window.HanaBioCommentAuth({ root, api: state.api, theme: currentTheme,
        snapshot: () => ({ pageId: state.pageId, anchor: getBlockAnchor(state.selectedBlock), drafts: Array.from(state.drafts), open: state.isOpen }),
        restore: saved => { if (saved?.pageId === state.pageId) {
          state.drafts = new Map(saved.drafts || []); state.selectedBlock = findBlock(state, saved.anchor);
          if (saved.open) openDrawer(state);
        } },
        changed: session => { state.session = session; state.writeGrant = ""; if (state.isOpen) renderDrawer(state); if (state.loaded) loadComments(state); },
        status: (message, error) => { openDrawer(state); showStatus(state, message, error); if (error) renderDrawer(state); },
      });
      await sharedAuth.init(); initThemeObserver();
    }
    await exchangeGitHubCode(state);
    if (state.abort.signal.aborted) return;
    await loadComments(state);
    if (!state.abort.signal.aborted) handleCommentHash(state);
  }

  if (typeof document$ !== "undefined" && document$?.subscribe) document$.subscribe(initPage);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initPage, { once: true });
  else initPage();
})();
