document.addEventListener("DOMContentLoaded", function () {
  let progressbarinner = document.querySelector(".progress-bar-inner");

  window.addEventListener("scroll", function () {
    let h = this.document.documentElement;
    let st = h.scrollTop;
    let sh = h.scrollHeight;
    let percent = (st / (sh - h.clientHeight)) * 100;

    let roundedPercent = Math.round(percent);
    progressbarinner.style.width = percent + "%";
    progressbarinner.innerHTML = roundedPercent + "%";
  });
});
