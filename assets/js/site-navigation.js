(function () {
  "use strict";

  var toggle = document.querySelector(".site-menu-toggle");
  var navigation = document.getElementById("site-navigation");
  var sidebar = document.querySelector(".site-sidebar");
  var header = document.querySelector(".site-header");
  if (!toggle || !navigation || !sidebar || !header) return;

  var root = document.documentElement;
  var compactLayout = window.matchMedia("(max-width: 1209px)");
  var pendingMetrics = false;

  function updateMetrics() {
    root.classList.toggle("has-sticky-navigation", compactLayout.matches);
    var viewport = window.visualViewport;
    var viewportHeight = viewport ? viewport.height : window.innerHeight;
    var height = Math.ceil(sidebar.getBoundingClientRect().height);

    // Keep the original scrolling layout when a persistent bar would crowd the view.
    if (!compactLayout.matches || height > viewportHeight / 3) {
      root.classList.remove("has-sticky-navigation");
      root.style.removeProperty("--compact-header-height");
      navigation.style.removeProperty("max-height");
      return;
    }

    root.style.setProperty("--compact-header-height", height + "px");
    if (!navigation.hidden) {
      var bottom = viewport ? viewport.offsetTop + viewport.height : window.innerHeight;
      var available = bottom - navigation.getBoundingClientRect().top - 12;
      navigation.style.maxHeight = Math.max(0, available) + "px";
    } else {
      navigation.style.removeProperty("max-height");
    }
  }

  function scheduleMetrics() {
    if (pendingMetrics) return;
    pendingMetrics = true;
    window.requestAnimationFrame(function () {
      pendingMetrics = false;
      updateMetrics();
    });
  }

  function setExpanded(expanded) {
    if (!expanded && navigation.contains(document.activeElement)) {
      toggle.focus({ preventScroll: true });
    }
    toggle.setAttribute("aria-expanded", String(expanded));
    navigation.hidden = !expanded;
    if (!expanded) navigation.scrollTop = 0;
    updateMetrics();
  }

  function updateLayout() {
    var toggleHadFocus = document.activeElement === toggle;
    toggle.hidden = !compactLayout.matches;
    setExpanded(!compactLayout.matches);
    if (toggleHadFocus && !compactLayout.matches) {
      var currentLink = navigation.querySelector('[aria-current="page"]') || navigation.querySelector("a");
      if (currentLink) currentLink.focus({ preventScroll: true });
    }
  }

  function revealFocus(element) {
    if (!root.classList.contains("has-sticky-navigation") || header.contains(element)) return;
    if (!element.closest("main, .site-footer")) return;
    var top = sidebar.getBoundingClientRect().bottom + 8;
    var bounds = element.getBoundingClientRect();
    if (bounds.top < top) window.scrollBy(0, bounds.top - top);
  }

  function revealInitialFragment() {
    if (!root.classList.contains("has-sticky-navigation") || !window.location.hash) return;
    var id;
    try {
      id = decodeURIComponent(window.location.hash.slice(1));
    } catch (error) {
      return;
    }
    var target = document.getElementById(id);
    if (!target) return;
    var top = target.getBoundingClientRect().top;
    // Correct an early browser jump without returning readers who have scrolled away.
    if (top >= -2 && top < sidebar.getBoundingClientRect().bottom) {
      target.scrollIntoView({ block: "start" });
    }
  }

  toggle.addEventListener("click", function () {
    setExpanded(navigation.hidden);
  });

  navigation.addEventListener("click", function (event) {
    if (compactLayout.matches && event.target.closest("a")) setExpanded(false);
  });

  document.addEventListener("click", function (event) {
    if (compactLayout.matches && !navigation.hidden && !header.contains(event.target)) {
      setExpanded(false);
    }
  });

  document.addEventListener("focusin", function (event) {
    if (!compactLayout.matches) return;
    if (!navigation.hidden && !header.contains(event.target)) setExpanded(false);
    window.requestAnimationFrame(function () {
      if (document.activeElement === event.target) revealFocus(event.target);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && compactLayout.matches && !navigation.hidden) {
      setExpanded(false);
      toggle.focus();
    }
  });

  compactLayout.addEventListener("change", updateLayout);
  window.addEventListener("resize", scheduleMetrics);
  window.addEventListener("scroll", function () {
    if (compactLayout.matches && !navigation.hidden) scheduleMetrics();
  }, { passive: true });
  window.addEventListener("hashchange", function () {
    window.requestAnimationFrame(revealInitialFragment);
  });
  window.addEventListener("load", function () {
    updateMetrics();
    revealInitialFragment();
  });
  if (window.visualViewport) window.visualViewport.addEventListener("resize", scheduleMetrics);
  if ("ResizeObserver" in window) new ResizeObserver(scheduleMetrics).observe(header);
  if (document.fonts) document.fonts.ready.then(scheduleMetrics);
  updateLayout();
})();
