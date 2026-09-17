(function () {
  "use strict";

  var toggle = document.querySelector(".site-menu-toggle");
  var navigation = document.getElementById("site-navigation");
  if (!toggle || !navigation) return;

  var compactLayout = window.matchMedia("(max-width: 1209px)");

  function setExpanded(expanded) {
    toggle.setAttribute("aria-expanded", String(expanded));
    navigation.hidden = !expanded;
  }

  function updateLayout() {
    toggle.hidden = !compactLayout.matches;
    setExpanded(!compactLayout.matches);
  }

  toggle.addEventListener("click", function () {
    setExpanded(navigation.hidden);
  });

  navigation.addEventListener("click", function (event) {
    if (compactLayout.matches && event.target.closest("a")) setExpanded(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && compactLayout.matches && !navigation.hidden) {
      setExpanded(false);
      toggle.focus();
    }
  });

  compactLayout.addEventListener("change", updateLayout);
  updateLayout();
})();
