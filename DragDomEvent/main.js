var btn = document.querySelector(".btn");
var handleDrag = function (e) {
  var left = e.clientX - offsetX - 10;
  var top = e.clientY - offsetY - 10;
  var css = {
    position: "relative",
    top: `${top}px`,
    left: `${left}px`,
  };
  Object.assign(btn.style, css);
};
var isDrag = false;
var offsetX, offsetY;

btn.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    isDrag = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  }
});
document.addEventListener("mouseup", function () {
  isDrag = false;
});
document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    handleDrag(e);
    btn.style.cursor = "move";
    document.querySelector("html").style.cursor = "move";
  }
});
