/* GA4 owns page views, including History API changes. Do not also subscribe to
 * location$ or document$: that would count instant navigation twice.
 * The data stream must keep Enhanced measurement > Page views > History on. */
(() => {
  "use strict";
  const script = document.currentScript;
  const property = script?.dataset.property;
  if (!/^G-[A-Z0-9]+$/.test(property || "") || window.__hbAnalyticsLoaded) return;
  let site;
  try { site = new URL(script.dataset.siteUrl); } catch { return; }
  const path = site.pathname.replace(/\/$/, "");
  if (location.protocol !== "https:" || location.origin !== site.origin ||
      !(location.pathname === path || location.pathname.startsWith(`${path}/`))) return;
  // Fail closed if an earlier login callback handler could not run.
  const query = new URLSearchParams(location.search);
  if (query.has("giscus") || query.has("hb-login")) return;

  window.__hbAnalyticsLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", property);
  const tag = document.createElement("script");
  tag.id = "hb-google-tag";
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(property)}`;
  document.head.append(tag);
})();
