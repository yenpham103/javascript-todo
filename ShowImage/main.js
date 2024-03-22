// var images = document.querySelectorAll(".image img");
// var prev = document.querySelector(".prev");
// var right = document.querySelector(".right");
// var close = document.querySelector(".close");
// var galleryImg = document.querySelector(".gallery-inner img");
// var gallery = document.querySelector(".gallery");

// var currentIndex = 0;

// function showGallery() {
//   if (currentIndex === 0) {
//     prev.classList.add("hide");
//   } else {
//     prev.classList.remove("hide");
//   }

//   if (currentIndex === images.length - 1) {
//     right.classList.add("hide");
//   } else {
//     right.classList.remove("hide");
//   }

//   galleryImg.src = images[currentIndex].src;
//   gallery.classList.add("show");
// }
// images.forEach((image, index) => {
//   image.addEventListener("click", function () {
//     currentIndex = index;
//     showGallery();
//   });
// });
// close.addEventListener("click", function () {
//   gallery.classList.remove("show");
// });

// document.addEventListener("keydown", function (e) {
//   if (e.keyCode == 27) {
//     gallery.classList.remove("show");
//   }
// });

// prev.addEventListener("click", function () {
//   if (currentIndex > 0) {
//     currentIndex--;
//     showGallery();
//   }
// });
// right.addEventListener("click", function () {
//   if (currentIndex < images.length - 1) {
//     currentIndex++;
//     showGallery();
//   }
// });

//Code lai
var images = document.querySelectorAll(".image img");

var gallery = document.querySelector(".gallery");

var galleryImage = document.querySelector(".gallery-image img");

var close = document.querySelector(".close-icon");

var left = document.querySelector(".left");
var right = document.querySelector(".right");

var curentIndex = 0;

function showGalleryImage() {
  if (curentIndex === 0) {
    left.classList.add("hide");
  } else {
    left.classList.remove("hide");
  }
  if (curentIndex === images.length - 1) {
    right.classList.add("hide");
  } else {
    right.classList.remove("hide");
  }
  gallery.classList.add("active");
  galleryImage.src = images[curentIndex].src;
}

function removeGalleryImage() {
  gallery.classList.remove("active");
}

images.forEach(function (image, index) {
  image.addEventListener("click", function () {
    curentIndex = index;
    showGalleryImage();
  });
});

close.addEventListener("click", removeGalleryImage);

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    removeGalleryImage();
  }
});

left.addEventListener("click", function () {
  if (curentIndex > 0) {
    curentIndex--;
    showGalleryImage();
  }
});
right.addEventListener("click", function () {
  if (curentIndex < images.length - 1) {
    curentIndex++;
    showGalleryImage();
  }
});
