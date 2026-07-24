(function () {
  "use strict";

  var params = new URLSearchParams(window.location.search);
  if (params.get("view") !== "quick-guide") return;

  var guide = document.querySelector(".instrument-quick-guide");
  if (!guide) return;

  document.body.classList.add("quick-guide-focus");
  document.title = guide.querySelector("h2").textContent + " Quick Guide";
})();
