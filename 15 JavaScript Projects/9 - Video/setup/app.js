// MDN
// The DOMContentLoaded event fires when the HTML document has been completely parsed and loaded, without waiting for StyleSheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

// Select swicth-btn, video-container, title and preloader

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const title = document.querySelector("h1");
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});

window.addEventListener("DOMContentLoaded", function () {
  video.removeAttribute("muted");
  video.muted = false;
  video.volume = 1;
  setTimeout(() => {
    title.textContent = "";
  }, 3000);
});

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});
