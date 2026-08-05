(function () {
  "use strict";

  var guide = document.querySelector("[data-trainer-guide]");
  var tools = document.querySelector("[data-trainer-session-tools]");
  if (!guide || !tools) return;

  var boxes = Array.prototype.slice.call(
    guide.querySelectorAll(".trainer-guide-content input[type='checkbox']")
  );
  if (!boxes.length) return;

  var progress = tools.querySelector("[data-trainer-progress]");
  var nextButton = tools.querySelector("[data-trainer-next]");
  var resetButton = tools.querySelector("[data-trainer-reset]");
  var revision = guide.getAttribute("data-guide-revision") || "current";
  var storageKey = "breakerspace-trainer-checklist:" + window.location.pathname + ":" + revision;

  function readState() {
    try {
      var saved = window.sessionStorage.getItem(storageKey);
      var values = saved ? JSON.parse(saved) : [];
      return Array.isArray(values) ? values : [];
    } catch (error) {
      return [];
    }
  }

  function writeState() {
    try {
      window.sessionStorage.setItem(
        storageKey,
        JSON.stringify(boxes.map(function (box) { return box.checked; }))
      );
    } catch (error) {
      // The checklist still works when browser storage is unavailable.
    }
  }

  function updateProgress() {
    var complete = boxes.filter(function (box) { return box.checked; }).length;
    var remaining = boxes.length - complete;

    boxes.forEach(function (box) {
      var item = box.closest("li");
      if (item) item.classList.toggle("trainer-task-complete", box.checked);
    });

    progress.textContent = complete + " of " + boxes.length + " items complete";
    nextButton.disabled = remaining === 0;
    nextButton.textContent = remaining === 0 ? "Checklist complete" : "Next unchecked item";
  }

  var savedState = readState();
  boxes.forEach(function (box, index) {
    box.disabled = false;
    box.classList.add("trainer-checklist-box");
    box.setAttribute(
      "aria-label",
      box.closest("li") ? box.closest("li").textContent.trim() : "Checklist item " + (index + 1)
    );
    box.checked = savedState[index] === true;
    box.addEventListener("change", function () {
      writeState();
      updateProgress();
    });
  });

  nextButton.addEventListener("click", function () {
    var next = boxes.find(function (box) { return !box.checked; });
    if (!next) return;
    next.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "center"
    });
    next.focus({ preventScroll: true });
  });

  resetButton.addEventListener("click", function () {
    var hasProgress = boxes.some(function (box) { return box.checked; });
    if (hasProgress && !window.confirm("Clear all checkmarks and start a new session?")) return;

    boxes.forEach(function (box) { box.checked = false; });
    writeState();
    updateProgress();
    boxes[0].focus();
  });

  tools.hidden = false;
  updateProgress();
})();
