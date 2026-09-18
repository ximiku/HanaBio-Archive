// Both the document and search previews use this queue. Failed work must not
// block later navigation, and no conversion may race a document reset.
(() => {
  let start;
  let pending = new Promise(resolve => { start = resolve; });
  window.hbMath = {
    start,
    enqueue(work) {
      const result = pending.then(work);
      pending = result.catch(error => console.error("MathJax typesetting failed", error));
      return result;
    }
  };
})();

window.MathJax = {
  // Search lives in a ShadowRoot. A complete, stable stylesheet can be shared
  // there without missing glyphs first encountered after document typesetting.
  chtml: { adaptiveCSS: false },
  tex: {
    // Surface unsupported commands as parse errors so search can retain the
    // original TeX instead of presenting a silently altered expression.
    packages: { "[-]": ["noundefined"] },
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },
  startup: {
    // 初次打开与即时导航共用队列，避免启动期间或两次排版之间相互抢跑。
    typeset: false,
    ready() {
      MathJax.startup.defaultReady();
      MathJax.startup.promise.then(window.hbMath.start);
      let revision = 0;
      document$.subscribe(() => {
        const current = ++revision;
        window.hbMath.enqueue(async () => {
          if (current !== revision) return;
          // Keep generated glyph CSS: search previews live in a ShadowRoot and
          // can remain mounted across page changes.
          MathJax.typesetClear();
          MathJax.texReset();
          await MathJax.typesetPromise();
          if (typeof document !== "undefined") {
            document.dispatchEvent(new Event("hb:math-ready"));
          }
        }).catch(() => {});
      });
    }
  }
};
