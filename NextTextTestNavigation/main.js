var products = document.querySelector(".products");
var productActive = products.querySelector(".active");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var productFirst = productActive;
var productLast = products.lastElementChild;

var handleNext = function () {
  var nextElement = productActive.nextElementSibling;
  if (nextElement === null) {
    nextElement = productFirst;
  }
  nextElement.classList.add("active");
  productActive.classList.remove("active");
  productActive = nextElement;
};

var handlePrev = function () {
  var prevElement = productActive.previousElementSibling;
  if (prevElement === null) {
    prevElement = productLast;
  }
  prevElement.classList.add("active");
  productActive.classList.remove("active");
  productActive = prevElement;
};

nextBtn.addEventListener("click", handleNext);
prevBtn.addEventListener("click", handlePrev);

document.addEventListener("keyup", function (e) {
  console.log(e);
  if (e.key === "ArrowRight") {
    handleNext();
  }
  if (e.key === "ArrowLeft") {
    handlePrev();
  }
});
