/* Zensical's search owns its Preact nodes inside an open ShadowRoot. Keep those
 * nodes intact and render mathematical previews in disposable sibling copies.
 * Select by structure/semantics, never by the search bundle's minified classes. */
(() => {
  "use strict";
  const RENDERED = "data-hb-math-rendered";
  const SOURCE = "data-hb-math-source";
  const STYLE = "data-hb-math-style";
  const owned = node => node.nodeType === 1 &&
    (node.hasAttribute(RENDERED) || node.hasAttribute(STYLE));
  const roots = new Map();
  const waiting = new Map();

  function formulas(text) {
    return Array.from(text.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g), match => ({
      start: match.index, end: match.index + match[0].length,
      tex: match[1] ?? match[2]
    }));
  }

  // WebKit's line-clamp counts MathJax's internal table/block boxes as lines,
  // sometimes cutting through the very first line. Measure ordinary flow and
  // shorten only our display copy at complete text/formula boundaries instead.
  function overflowStart(copy, maxLines) {
    const walker = document.createTreeWalker(copy, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (node.nodeType === 1 && node.classList.contains("hb-search-math")) return NodeFilter.FILTER_ACCEPT;
        if (node.parentElement.closest(".hb-search-math")) return NodeFilter.FILTER_REJECT;
        return node.nodeType === 3 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    let node, line, lines = 0;
    while ((node = walker.nextNode())) {
      const range = document.createRange();
      range.selectNodeContents(node);
      const rects = node.nodeType === 1 ? [node.getBoundingClientRect()] : Array.from(range.getClientRects());
      for (const rect of rects) {
        if (!rect.width || !rect.height) continue;
        if (!line || rect.top >= line.bottom - .5 || rect.bottom <= line.top + .5) {
          if (++lines > maxLines) {
            if (node.nodeType === 1) return { node, offset: null };
            // Locate the last text position on the preceding complete line.
            let low = 0, high = node.length;
            while (low < high) {
              const mid = Math.ceil((low + high) / 2);
              range.setEnd(node, mid);
              if (Array.from(range.getClientRects()).some(box => box.width && box.bottom > line.bottom + .5)) high = mid - 1;
              else low = mid;
            }
            // Do not split a surrogate pair.
            if (low && /[\uDC00-\uDFFF]/.test(node.data[low] || "")) low--;
            return { node, offset: low };
          }
          line = { top: rect.top, bottom: rect.bottom };
        } else {
          line.top = Math.min(line.top, rect.top);
          line.bottom = Math.max(line.bottom, rect.bottom);
        }
      }
    }
    return null;
  }

  function trimPreview(copy) {
    const start = overflowStart(copy, 2);
    if (!start) return;
    const range = document.createRange();
    if (start.offset === null) range.setStartBefore(start.node);
    else range.setStart(start.node, start.offset);
    range.setEnd(copy, copy.childNodes.length);
    range.deleteContents();
    const ellipsis = document.createTextNode("…");
    copy.append(ellipsis);
    // Reserve space for the ellipsis, removing whole formulas if necessary.
    while (overflowStart(copy, 2)) {
      let tail = ellipsis.previousSibling;
      while (tail?.lastChild && !tail.classList?.contains("hb-search-math")) tail = tail.lastChild;
      if (!tail) break;
      if (tail.nodeType === 3 && tail.length) {
        const characters = Array.from(tail.data);
        characters.pop(); tail.data = characters.join("");
        if (tail.length) continue;
      }
      const parent = tail.parentElement;
      tail.remove();
      if (parent !== copy && !parent.childNodes.length) parent.remove();
    }
  }

  async function render(source, current) {
    const copy = source.cloneNode(true);
    copy.removeAttribute(SOURCE);
    copy.removeAttribute("aria-hidden");
    copy.setAttribute(RENDERED, "");
    // Neither copied headings nor descendants should duplicate page IDs.
    copy.removeAttribute("id");
    copy.querySelectorAll("[id]").forEach(node => node.removeAttribute("id"));
    const walker = document.createTreeWalker(copy, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let text = "", node;
    while ((node = walker.nextNode())) {
      nodes.push({ node, start: text.length, end: text.length + node.length });
      text += node.textContent;
    }
    const matches = formulas(text);
    let count = 0;
    // Work backwards so earlier text offsets and Preact's original nodes stay valid.
    for (const match of matches.reverse()) {
      if (!current()) return null;
      const start = nodes.find(part => part.end > match.start);
      const end = nodes.find(part => part.end >= match.end);
      if (!start || !end || start.node.parentElement.closest("code, pre") ||
          end.node.parentElement.closest("code, pre")) continue;
      const range = document.createRange();
      range.setStart(start.node, match.start - start.start);
      range.setEnd(end.node, match.end - end.start);
      const fragment = range.cloneContents();
      const highlighted = Boolean(fragment.querySelector("mark, u") ||
        start.node.parentElement.closest("mark, u"));
      const size = parseFloat(getComputedStyle(source).fontSize) || 16;
      let math;
      try {
        math = await MathJax.tex2chtmlPromise(match.tex, {
          display: false, em: size, ex: size / 2,
          containerWidth: Math.max(source.parentElement.clientWidth, 1)
        });
      } catch { continue; }
      if (!current()) return null;
      // Invalid/truncated TeX remains readable as source; do not guess a repair.
      if (math.querySelector("mjx-merror, [data-mjx-error]")) continue;
      math.removeAttribute("tabindex");
      const span = document.createElement(highlighted ? "mark" : "span");
      span.className = "hb-search-math";
      span.append(math);
      range.deleteContents();
      range.insertNode(span);
      count++;
    }
    return count ? copy : null;
  }

  function mount(root) {
    const previews = new Map();
    let generation = 0, timer;
    const style = document.createElement("style");
    style.setAttribute(STYLE, "");
    const css = `[${SOURCE}]{display:none!important}
      .hb-search-math{display:inline-block;white-space:nowrap}
      .hb-search-math mjx-container{margin:0!important;font-size:100%!important}
      .hb-search-math mjx-assistive-mml{position:absolute!important;width:1px;height:1px;
        overflow:hidden;clip-path:inset(50%);white-space:nowrap}
      [${RENDERED}]{min-width:0;overflow-wrap:anywhere}
      div[${RENDERED}]{display:block;-webkit-line-clamp:unset;line-clamp:unset;
        max-height:none;overflow:visible}`;
    style.textContent = css;
    root.append(style);

    const restore = source => {
      const copy = previews.get(source)?.copy;
      if (copy) { resize.unobserve(copy); copy.remove(); }
      source.removeAttribute(SOURCE);
      source.removeAttribute("aria-hidden");
      previews.delete(source);
    };

    async function update(version) {
      const current = () => generation === version && root.host.isConnected;
      if (!current() || !window.hbMath || !MathJax.tex2chtmlPromise) return;
      for (const source of previews.keys()) if (!source.isConnected) restore(source);
      const fields = [];
      root.querySelectorAll("ol > li > a h2").forEach(heading => {
        if (heading.hasAttribute(RENDERED)) return;
        fields.push(heading);
        let excerpt = heading.nextElementSibling;
        while (excerpt?.hasAttribute(RENDERED)) excerpt = excerpt.nextElementSibling;
        if (excerpt?.tagName === "DIV") fields.push(excerpt);
      });
      for (const source of fields) {
        if (!current()) return;
        const html = source.innerHTML;
        if (previews.get(source)?.html === html) continue;
        restore(source);
        if (!formulas(source.textContent).length) continue;
        const copy = await render(source, current);
        if (!current() || !source.isConnected || source.innerHTML !== html) return;
        previews.set(source, { html, copy, full: copy?.cloneNode(true) });
        if (copy) {
          source.after(copy);
          source.setAttribute(SOURCE, "");
          source.setAttribute("aria-hidden", "true");
          resize.observe(copy);
        }
      }
      // Global document CSS cannot cross a shadow boundary. MathJax retains its
      // glyph cache, so this sheet includes glyphs in both new and older previews.
      if (current()) {
        // MathJax adds new glyphs with CSSOM insertRule: textContent alone omits
        // those rules. Keep its live sheet attached and copy the actual rules.
        const sheet = document.getElementById("MJX-CHTML-styles") || MathJax.chtmlStylesheet();
        if (!sheet.isConnected) document.head.append(sheet);
        const rules = Array.from(sheet.sheet.cssRules, rule => rule.cssText).join("\n");
        style.textContent = `${rules}\n${css}`;
        for (const preview of previews.values()) {
          const { copy, full } = preview;
          if (!copy) continue;
          copy.replaceChildren(...Array.from(full.childNodes, node => node.cloneNode(true)));
          preview.width = copy.getBoundingClientRect().width;
          // An unusually wide equation is scaled as one unit, never sliced.
          // Leave room for the ellipsis if this equation ends the second line.
          const available = Math.max(preview.width - parseFloat(getComputedStyle(copy).fontSize), 1);
          for (const math of copy.querySelectorAll(".hb-search-math")) {
            const width = math.getBoundingClientRect().width;
            if (width > preview.width && preview.width > 0) math.style.fontSize = `${100 * available / width}%`;
          }
          if (copy.tagName === "DIV") trimPreview(copy);
        }
      }
    }

    function schedule() {
      const version = ++generation;
      clearTimeout(timer);
      timer = setTimeout(() => {
        window.hbMath?.enqueue(() => update(version)).catch(() => {});
      }, 80);
    }
    const resize = new ResizeObserver(entries => {
      if (entries.some(entry => Array.from(previews.values()).some(preview =>
        preview.copy === entry.target && Math.abs(preview.width - entry.contentRect.width) > .5))) schedule();
    });
    const observer = new MutationObserver(records => {
      const changed = records.some(record => {
        const element = record.target.nodeType === 1 ? record.target : record.target.parentElement;
        if (element?.closest(`[${RENDERED}], [${STYLE}]`)) return false;
        if (record.type === "characterData") return true;
        return [...record.addedNodes, ...record.removedNodes].some(node => !owned(node));
      });
      if (changed) schedule();
    });
    observer.observe(root, { childList: true, characterData: true, subtree: true });
    document.addEventListener("hb:math-ready", schedule);
    document.fonts?.addEventListener("loadingdone", schedule);
    document.fonts?.ready.then(() => { if (root.host.isConnected) schedule(); });
    schedule();
    return () => {
      generation++;
      clearTimeout(timer);
      observer.disconnect();
      resize.disconnect();
      document.removeEventListener("hb:math-ready", schedule);
      document.fonts?.removeEventListener("loadingdone", schedule);
      for (const source of previews.keys()) restore(source);
      style.remove();
    };
  }

  function discover() {
    for (const [host, observer] of waiting) {
      if (!host.isConnected) { observer.disconnect(); waiting.delete(host); }
    }
    for (const [host, dispose] of roots) {
      if (!host.isConnected) { dispose(); roots.delete(host); }
    }
    for (const host of document.body.children) {
      const root = host.shadowRoot;
      if (!root || roots.has(host)) continue;
      const connect = () => {
        if (!root.querySelector('input[role="combobox"]')) return;
        waiting.get(host)?.disconnect();
        waiting.delete(host);
        if (!roots.has(host)) roots.set(host, mount(root));
      };
      connect();
      // The search index can arrive after the shell and after document$ emits.
      if (!roots.has(host) && !waiting.has(host)) {
        const observer = new MutationObserver(connect);
        observer.observe(root, { childList: true, subtree: true });
        waiting.set(host, observer);
      }
    }
  }
  // The shell is appended once, and may be recreated by a future theme release.
  const discovery = new MutationObserver(discover);
  discovery.observe(document.body, { childList: true });
  document$.subscribe(discover);
})();
