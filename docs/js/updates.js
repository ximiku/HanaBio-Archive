(function () {
  function mountUpdates() {
    const old = document.querySelector(".update-panel");
    if (old) old.remove();

    const src = document.getElementById("updates-box");
    const sidebarInner =
      document.querySelector(".md-sidebar--secondary .md-sidebar__inner") ||
      document.querySelector(".md-sidebar--secondary");
    if (!src || !sidebarInner) return;

    const ulSrc = src.querySelector("ul");
    if (!ulSrc) return;
    const items = Array.from(ulSrc.querySelectorAll("li"));
    items.sort((a, b) => (b.dataset.date || "").localeCompare(a.dataset.date || ""));

    const panel = document.createElement("div");
    panel.className = "update-panel";

    const title = document.createElement("div");
    title.className = "update-title";
    title.textContent = "Update Notification"; // 标题名
    panel.appendChild(title);

    const ul = document.createElement("ul");
    ul.className = "update-list";

    const fmt = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });

    items.forEach((origLi, idx) => {
      const li = document.createElement("li");
      li.className = "update-item";
      if (idx === 0) li.classList.add("is-latest");

      const iso = (origLi.dataset.date || "").trim();
      let disp = "";
      if (iso) {
        const dt = new Date(iso + "T00:00:00");
        disp = fmt.format(dt).replace(/^([A-Za-z]{3}) /, "$1. ");
      }

      // 获取原始描述（去掉“传送门”）
      let text = origLi.textContent.trim();
      text = text.replace(/—\s*传送门/, "").trim();

      // 提取链接
      const a = origLi.querySelector("a");
      const url = a ? a.getAttribute("href") : "#";

      // 构造：日期加粗，事项整体作为链接
      const ds = document.createElement("span");
      ds.className = "update-date";
      ds.textContent = disp;

      const link = document.createElement("a");
      link.href = url;
      link.className = "update-link";
      link.textContent = " " + text;

      li.appendChild(ds);
      li.appendChild(link);
      ul.appendChild(li);
    });

    panel.appendChild(ul);
    sidebarInner.appendChild(panel);
  }

  if (window.document$) {
    window.document$.subscribe(mountUpdates);
  } else {
    window.addEventListener("DOMContentLoaded", mountUpdates);
  }
})();
