(function () {
  "use strict";

  var sidebar = document.querySelector(".site-sidebar");
  var footer = document.querySelector(".site-footer");
  if (!sidebar || !footer) return;

  var wrapper = sidebar.parentElement;
  var footerPosition = document.createComment("Footer follows main content on mobile and in print.");
  footer.before(footerPosition);
  var desktop = window.matchMedia("screen and (min-width: 1210px)");

  function updateSticky() {
    var inset = parseFloat(getComputedStyle(sidebar).getPropertyValue("--sidebar-top")) || 0;
    var fits = sidebar.getBoundingClientRect().height + 2 * inset <= window.innerHeight;
    sidebar.classList.toggle("is-sticky", desktop.matches && fits);
  }

  function updateLayout() {
    // Move the single footer so visual, reading, and keyboard order agree in both layouts.
    var focused = document.activeElement;
    var restoreFocus = footer.contains(focused);
    if (desktop.matches) {
      sidebar.appendChild(footer);
    } else {
      footerPosition.after(footer);
    }
    wrapper.classList.toggle("has-sidebar-footer", desktop.matches);
    if (restoreFocus) focused.focus({ preventScroll: true });
    updateSticky();
  }

  desktop.addEventListener("change", updateLayout);
  window.addEventListener("resize", updateSticky);
  // Font loading, text zoom, or longer footer copy can change the fit without a resize.
  if ("ResizeObserver" in window) new ResizeObserver(updateSticky).observe(sidebar);
  updateLayout();
})();
