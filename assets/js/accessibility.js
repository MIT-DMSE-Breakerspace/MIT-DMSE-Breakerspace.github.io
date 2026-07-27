(function () {
  "use strict";

  function previousHeading(element) {
    var candidate = element.previousElementSibling;

    while (candidate) {
      if (/^H[1-6]$/.test(candidate.tagName)) return candidate.textContent.trim();
      candidate = candidate.previousElementSibling;
    }

    return "Data";
  }

  var tables = Array.prototype.slice.call(document.querySelectorAll("main table"));
  var tableHeadings = tables.map(function (table) {
    return previousHeading(table);
  });
  var headingCounts = tableHeadings.reduce(function (counts, heading) {
    counts[heading] = (counts[heading] || 0) + 1;
    return counts;
  }, {});
  var headingPositions = {};
  var tableWrappers = [];

  tables.forEach(function (table, index) {
    if (table.parentElement.classList.contains("table-scroll")) return;

    var heading = tableHeadings[index];
    headingPositions[heading] = (headingPositions[heading] || 0) + 1;

    var wrapper = document.createElement("div");
    wrapper.className = "table-scroll";
    wrapper.tabIndex = -1;
    wrapper.setAttribute("role", "region");
    wrapper.setAttribute(
      "aria-label",
      headingCounts[heading] > 1
        ? heading + " table " + headingPositions[heading] + " of " + headingCounts[heading]
        : heading + " table"
    );
    wrapper.setAttribute("aria-describedby", "table-scroll-help-" + index);

    var help = document.createElement("span");
    help.id = "table-scroll-help-" + index;
    help.hidden = true;
    help.textContent = "Scroll horizontally to see all table columns when needed.";

    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
    wrapper.appendChild(help);
    tableWrappers.push(wrapper);
  });

  function updateTableFocus() {
    tableWrappers.forEach(function (wrapper) {
      wrapper.tabIndex = wrapper.scrollWidth > wrapper.clientWidth + 1 ? 0 : -1;
    });
  }

  if (window.requestAnimationFrame) window.requestAnimationFrame(updateTableFocus);
  else updateTableFocus();
  window.addEventListener("resize", updateTableFocus);
})();
