(function () {
  "use strict";

  var mobile = document.getElementById("calendar-mobile");
  var desktop = document.getElementById("calendar-desktop");
  var template = document.getElementById("calendar-desktop-template");
  if (!mobile || !desktop || !template) return;

  var phone = window.matchMedia("(max-width: 720px)");
  var mobileRequested = false;

  function loadMobileEvents() {
    var status = mobile.querySelector(".calendar-events-status");
    var list = mobile.querySelector(".calendar-events-list");
    var controller = new AbortController();
    var timeout = setTimeout(function () { controller.abort(); }, 10000);
    mobile.setAttribute("aria-busy", "true");

    // This public LibCal widget permits cross-origin requests. Keep only event
    // links and date text, so titles wrap in our layout without vendor styles.
    fetch(mobile.dataset.libcalUrl, { signal: controller.signal, credentials: "omit" })
      .then(function (response) {
        if (!response.ok) throw new Error("Unable to load calendar events");
        return response.text();
      })
      .then(function (html) {
        var widget = new DOMParser().parseFromString(html, "text/html");
        var events = widget.querySelector("ul");
        if (!events) throw new Error("Unexpected calendar widget response");

        if (!events.querySelector("a[href]")) {
          status.textContent = "No upcoming events are currently listed. Check the full calendar for other dates.";
          return;
        }

        var items = document.createDocumentFragment();
        events.querySelectorAll("li").forEach(function (event) {
          var sourceLink = event.querySelector("a[href]");
          var sourceDate = event.querySelector(".s-lc-ea-date");
          if (!sourceLink || !sourceDate) throw new Error("Unexpected calendar event format");

          var url = new URL(sourceLink.getAttribute("href"), mobile.dataset.libcalUrl);
          if (url.origin !== "https://breakerspace.libcal.com" || !/^\/event\/\d+$/.test(url.pathname)) {
            throw new Error("Unexpected calendar event link");
          }

          var item = document.createElement("li");
          var link = document.createElement("a");
          link.href = url.href;
          link.textContent = sourceLink.textContent.trim();
          link.target = "_blank";
          link.rel = "noopener";
          link.setAttribute("aria-label", link.textContent + " (opens in a new tab)");

          var date = document.createElement("span");
          date.className = "calendar-event-date";
          date.textContent = sourceDate.textContent.trim();
          item.append(link, date);
          items.appendChild(item);
        });

        list.appendChild(items);
        list.hidden = false;
        status.hidden = true;
      })
      .catch(function () {
        status.textContent = "Upcoming events couldn’t load. Use the full calendar link above to view events and register.";
      })
      .finally(function () {
        clearTimeout(timeout);
        mobile.removeAttribute("aria-busy");
      });
  }

  function updateCalendar() {
    mobile.hidden = !phone.matches;
    desktop.hidden = phone.matches;

    if (phone.matches) {
      if (!mobileRequested) {
        mobileRequested = true;
        loadMobileEvents();
      }
    } else if (!desktop.hasChildNodes()) {
      desktop.appendChild(template.content.cloneNode(true));
    }
  }

  updateCalendar();
  phone.addEventListener("change", updateCalendar);
})();
