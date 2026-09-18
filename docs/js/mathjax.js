window.MathJax = {
  tex: {
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
      let pending = MathJax.startup.promise;
      let revision = 0;
      document$.subscribe(() => {
        const current = ++revision;
        pending = pending.then(() => {
          if (current !== revision) return;
          MathJax.startup.output.clearCache();
          MathJax.typesetClear();
          MathJax.texReset();
          return MathJax.typesetPromise();
        }).catch(error => console.error("MathJax typesetting failed", error));
      });
    }
  }
};
