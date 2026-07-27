(function () {
  "use strict";

  document.querySelectorAll(".youtube-facade").forEach(function (facade) {
    var trigger = facade.querySelector(".youtube-facade__trigger");

    if (!trigger) {
      return;
    }

    trigger.addEventListener("click", function (event) {
      var videoId = facade.dataset.youtubeId;
      var videoTitle = facade.dataset.youtubeTitle;
      var iframe = document.createElement("iframe");

      event.preventDefault();

      iframe.className = "youtube-facade__iframe";
      iframe.src =
        "https://www.youtube-nocookie.com/embed/" +
        encodeURIComponent(videoId) +
        "?autoplay=1";
      iframe.title = videoTitle;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.setAttribute("allowfullscreen", "");

      facade.replaceChildren(iframe);
      iframe.focus();
    });
  });
})();
