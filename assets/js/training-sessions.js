(function () {
  "use strict";

  var container = document.getElementById("training-sessions");
  if (!container) return;

  var status = container.querySelector(".training-sessions-status");
  var list = container.querySelector(".training-sessions-list");
  var controller = new AbortController();
  var timeout = setTimeout(function () { controller.abort(); }, 10000);

  status.textContent = "Loading upcoming training sessions…";
  container.setAttribute("aria-busy", "true");

  // LibCal permits cross-origin requests to this public widget. Render only
  // event links and date text so the list uses our styles without a fixed iframe.
  fetch(container.dataset.libcalUrl, { signal: controller.signal, credentials: "omit" })
    .then(function (response) {
      if (!response.ok) throw new Error("Unable to load training sessions");
      return response.text();
    })
    .then(function (html) {
      var widget = new DOMParser().parseFromString(html, "text/html");
      var events = widget.querySelector("ul");
      if (!events) throw new Error("Unexpected training widget response");

      var items = document.createDocumentFragment();
      events.querySelectorAll("li").forEach(function (event) {
        var sourceLink = event.querySelector("a[href]");
        var sourceDate = event.querySelector(".s-lc-ea-date");
        if (!sourceLink || !sourceDate) return;

        var url = new URL(sourceLink.getAttribute("href"), container.dataset.libcalUrl);
        if (url.origin !== "https://breakerspace.libcal.com" || !/^\/event\/\d+$/.test(url.pathname)) return;

        var item = document.createElement("li");
        var link = document.createElement("a");
        link.href = url.href;
        link.textContent = sourceLink.textContent.trim();
        link.target = "_blank";
        link.rel = "noopener";
        link.setAttribute("aria-label", link.textContent + " (opens in a new tab)");

        var date = document.createElement("span");
        date.className = "training-session-date";
        date.textContent = sourceDate.textContent.trim();
        item.append(link, date);
        items.appendChild(item);
      });

      if (!items.childElementCount) {
        if (events.querySelector("a[href]")) throw new Error("Unexpected training event format");
        status.textContent = "No upcoming training sessions are currently listed. Email us to arrange training.";
        return;
      }

      list.appendChild(items);
      list.hidden = false;
      status.hidden = true;
    })
    .catch(function () {
      status.textContent = "Upcoming sessions couldn’t load. Use “View all training sessions” below to find a time and register.";
    })
    .finally(function () {
      clearTimeout(timeout);
      container.removeAttribute("aria-busy");
    });
})();
