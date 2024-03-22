//Tao element
var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");

var carouselDots = carousel.querySelector(".carousel-dots");

var nextBtn = carousel.querySelector(".next");
var prevBtn = carousel.querySelector(".prev");

var renderDots = function (indexDot = 0) {
  var dotsHtml = "";
  carouselItems.forEach(function (item, _index) {
    dotsHtml += `<span data-index="${_index}" ${
      +_index === +indexDot ? "class= active" : ""
    }></span>`;
  });
  carouselDots.innerHTML = dotsHtml;

  carouselDots.addEventListener("click", function (e) {
    if ((e.target.nodeName = "SPAN")) {
      var indexClicked = e.target.dataset.index;
      index = indexClicked;
      goSlide();
    }
  });
};
//click Dots chuyen slide
var goSlide = function () {
  position = 0 - index * itemWidth;
  carouselInner.style.translate = `${position}px`;
  renderDots(index);
};

//Tinh toan so luong anh

var carouselItems = carouselInner.querySelectorAll(".item");

if (carouselItems.length) {
  //Lay kich thuoc cua 1 item
  var itemWidth = carouselInner.clientWidth; //lay kich thuoc cua 1 item

  //Lay tat ca item
  var items = carouselInner.children;

  //Tong kich thuoc cua tat ca cacs item
  var totalWidth = itemWidth * items.length;

  //Cap nhat css cho carousel inner
  carouselInner.style.width = `${totalWidth}px`;

  //Render dots
  renderDots();

  var position = 0;
  var index = 0;
  nextBtn.addEventListener("click", function () {
    console.log(position);
    if (Math.abs(position) < totalWidth - itemWidth) {
      position -= itemWidth;
      index++;
      carouselInner.style.translate = `${position}px`;
      renderDots(index);
    }
  });
  prevBtn.addEventListener("click", function () {
    console.log(position);
    if (Math.abs(position) > 0) {
      position += itemWidth;
      index--;
      carouselInner.style.translate = `${position}px`;
      renderDots(index);
    }
  });
}

//Vuot chuyen slide
var isDrag = false;
var initialOffsetX = 0;
var moveWidth;
carouselInner.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    isDrag = true;
    initialOffsetX = e.offsetX;
  }
});
carouselInner.addEventListener("mouseup", function () {
  isDrag = false;
  if (moveWidth < 0) {
    if (Math.abs(moveWidth) > 100 && index < carouselItems.length - 1) {
      index++;
    }
    goSlide(index);
  } else {
    if (Math.abs(moveWidth) > 100 && index > 0) {
      index--;
    }
    goSlide(index);
  }
});
carouselInner.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (isDrag) {
    moveWidth = e.offsetX - initialOffsetX;
    carouselInner.style.transition = "none";
    carouselInner.style.translate = `${position + moveWidth}px`;
  }
});
