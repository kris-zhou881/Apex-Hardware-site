(() => {
  "use strict";

  const config = window.APEX_SITE_CONFIG || {};
  const ga4Id = String(config.ga4MeasurementId || "").trim();
  const pixelId = String(config.metaPixelId || "").trim();
  const hasGa4 = /^G-[A-Z0-9]+$/i.test(ga4Id);
  const hasPixel = /^\d{5,30}$/.test(pixelId);
  const consentKey = "apex_analytics_consent_v1";

  function loadAnalytics() {
    if (hasGa4 && typeof window.gtag !== "function") {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", ga4Id, { anonymize_ip: true });
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`;
      document.head.append(script);
    }

    if (hasPixel && typeof window.fbq !== "function") {
      const fbq = function fbq() {
        fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
      };
      fbq.queue = [];
      fbq.loaded = true;
      fbq.version = "2.0";
      window.fbq = window.fbq || fbq;
      window.fbq("init", pixelId);
      window.fbq("track", "PageView");
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.append(script);
    }
  }

  window.apexTrack = (eventName, parameters = {}, metaEvent = "") => {
    if (typeof window.gtag === "function") window.gtag("event", eventName, parameters);
    if (metaEvent && typeof window.fbq === "function") window.fbq("track", metaEvent, parameters);
  };

  function showConsent() {
    const banner = document.createElement("aside");
    banner.className = "consent-banner";
    banner.setAttribute("aria-label", "Analytics preferences");
    banner.innerHTML = `<p><strong>Analytics preferences</strong><span>Allow anonymous site analytics and advertising measurement to help us improve project enquiries.</span></p><div><button class="button button-small" type="button" data-consent="accept">Allow</button><button class="button button-small button-secondary" type="button" data-consent="reject">Not now</button></div>`;
    banner.addEventListener("click", (event) => {
      const choice = event.target.closest("[data-consent]")?.dataset.consent;
      if (!choice) return;
      localStorage.setItem(consentKey, choice);
      if (choice === "accept") loadAnalytics();
      banner.remove();
    });
    document.body.append(banner);
  }

  if (hasGa4 || hasPixel) {
    const consent = localStorage.getItem(consentKey);
    if (consent === "accept") loadAnalytics();
    else if (consent !== "reject") showConsent();
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) return;
    const href = link.getAttribute("href") || "";
    if (href.startsWith("https://wa.me/")) {
      window.apexTrack("contact_whatsapp", { link_url: href, page_path: location.pathname }, "Contact");
    } else if (href.startsWith("mailto:")) {
      window.apexTrack("contact_email", { link_url: href.split("?")[0], page_path: location.pathname }, "Contact");
    } else if (/\/products\/.+\.html(?:$|[?#])/.test(href)) {
      window.apexTrack("select_item", { item_url: href, page_path: location.pathname });
    }
  });

  if (document.body?.dataset.catalogMode === "detail" || document.body?.dataset.pageType === "product") {
    window.apexTrack("view_item", { page_title: document.title, page_path: location.pathname }, "ViewContent");
  }
})();
