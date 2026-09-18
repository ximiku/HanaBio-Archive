/* Progressive enhancement: the original list, numbering, targets and tooltip
 * contents remain intact. Without this script (and in print), all notes show. */
(() => {
  "use strict";
  let dispose = () => {};
  document$.subscribe(() => {
    dispose();
    const section = document.querySelector(".md-content .footnote");
    const list = section?.querySelector(":scope > ol");
    if (!list) { dispose = () => {}; return; }
    const items = Array.from(list.children).filter(item => item.tagName === "LI");
    if (!items.length) return;
    const abort = new AbortController();
    const options = { signal: abort.signal };
    let expanded = false, visible = items.length, frame, highlightTimer, highlighted;
    let targetFrame, readingTarget, disposed = false;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "hb-footnotes-toggle";
    button.hidden = true;
    const previousId = list.id;
    if (!list.id) list.id = "hb-footnotes-list";
    button.setAttribute("aria-controls", list.id);
    section.append(button);

    function paint() {
      items.forEach((item, index) => item.classList.toggle("hb-footnote-hidden", !expanded && index >= visible));
      button.hidden = visible === items.length;
      button.setAttribute("aria-expanded", String(expanded));
      button.textContent = expanded ? "收起脚注" : `展开其余 ${items.length - visible} 条脚注`;
    }

    function measure() {
      if (disposed) return;
      items.forEach(item => item.classList.remove("hb-footnote-hidden"));
      const budget = parseFloat(getComputedStyle(section).getPropertyValue("--hb-footnote-budget")) || 360;
      const top = items[0].getBoundingClientRect().top;
      visible = 1;
      for (let index = 1; index < Math.min(items.length, 10); index++) {
        if (items[index].getBoundingClientRect().bottom - top > budget) break;
        visible = index + 1;
      }
      // Font/MathJax loading can move a previously visible anchor past the
      // cutoff. Keep that reading target available until the user toggles.
      if (readingTarget && items.indexOf(readingTarget) >= visible) expanded = true;
      paint();
    }

    function schedule() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    }

    function findTarget(hash) {
      let id;
      try { id = decodeURIComponent(hash.replace(/^#/, "")); } catch { return null; }
      const target = document.getElementById(id);
      return items.includes(target) ? target : null;
    }

    function reveal(target, scroll = true) {
      readingTarget = target;
      if (!target) return;
      if (items.indexOf(target) >= visible) { expanded = true; paint(); }
      highlighted?.classList.remove("hb-footnote-target");
      highlighted = target;
      target.classList.add("hb-footnote-target");
      clearTimeout(highlightTimer);
      highlightTimer = setTimeout(() => target.classList.remove("hb-footnote-target"), 2100);
      if (scroll) {
        cancelAnimationFrame(targetFrame);
        targetFrame = requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
      }
    }

    // Capture opens the target before the theme/browser handles the anchor.
    document.addEventListener("click", event => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const anchor = event.target.closest?.('a[href*="#"]');
      if (!anchor || (anchor.target && anchor.target !== "_self")) return;
      const url = new URL(anchor.href, location.href);
      if (url.origin === location.origin && url.pathname === location.pathname) reveal(findTarget(url.hash));
    }, { ...options, capture: true });
    const revealHash = () => reveal(findTarget(location.hash));
    window.addEventListener("hashchange", revealHash, options);
    window.addEventListener("popstate", revealHash, options);
    window.addEventListener("resize", schedule, options);
    document.addEventListener("hb:math-ready", schedule, options);
    // Images in notes may finish after typesetting. Capture load is intentional.
    section.addEventListener("load", schedule, { ...options, capture: true });
    document.fonts?.ready.then(() => { if (!disposed) schedule(); });
    button.addEventListener("click", () => {
      readingTarget = null;
      const top = button.getBoundingClientRect().top;
      expanded = !expanded;
      paint();
      if (!expanded) {
        // Keep the activating control on screen when a long list shrinks.
        window.scrollBy(0, button.getBoundingClientRect().top - top);
        button.focus({ preventScroll: true });
      }
    }, options);
    // Observe width only: hiding notes changes height and must not form a loop.
    let width = section.getBoundingClientRect().width;
    const resize = new ResizeObserver(entries => {
      const next = entries[0].contentRect.width;
      if (Math.abs(next - width) > .5) { width = next; schedule(); }
    });
    resize.observe(section);
    measure();
    revealHash();

    dispose = () => {
      disposed = true;
      abort.abort();
      resize.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(targetFrame);
      clearTimeout(highlightTimer);
      items.forEach(item => item.classList.remove("hb-footnote-hidden", "hb-footnote-target"));
      button.remove();
      if (!previousId) list.removeAttribute("id");
    };
  });
})();
