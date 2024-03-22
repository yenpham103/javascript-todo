var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    var progressBarWidth = this.clientWidth;
    var rate = (offsetX * 100) / progressBarWidth;
    progress.style.width = `${rate}%`;
    offsetWidth = positionSpace;
  }
});
progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    document.addEventListener("mousemove", handleDrag);
    initialClientX = e.clientX;
  }
  document.addEventListener("mouseup", function () {
    document.removeEventListener("mousemove", handleDrag);
  });
});

var initialClientX = 0;
var offsetWidth = 0;
var positionSpace = 0;
var handleDrag = function (e) {
  var clientX = e.clientX;
  positionSpace = offsetWidth + clientX - initialClientX;
  var progressBarWidth = progressBar.clientWidth;
  //   console.log(progressBarWidth);
  var rate = (positionSpace * 100) / progressBarWidth;
  if (rate > 100) {
    rate = 100;
  }
  progress.style.width = `${rate}%`;
};
