(function () {
  "use strict";

  var mobile = document.getElementById("calendar-mobile");
  var mobileWidget = document.getElementById("calendar-mobile-widget");
  var desktop = document.getElementById("calendar-desktop");
  var mobileTemplate = document.getElementById("calendar-mobile-template");
  var desktopTemplate = document.getElementById("calendar-desktop-template");
  if (!mobile || !mobileWidget || !desktop || !mobileTemplate || !desktopTemplate) return;

  var phone = window.matchMedia("(max-width: 720px)");

  function updateCalendar() {
    mobile.hidden = !phone.matches;
    desktop.hidden = phone.matches;

    var container = phone.matches ? mobileWidget : desktop;
    var template = phone.matches ? mobileTemplate : desktopTemplate;
    if (!container.hasChildNodes()) {
      container.appendChild(template.content.cloneNode(true));
    }
  }

  updateCalendar();
  phone.addEventListener("change", updateCalendar);
})();
