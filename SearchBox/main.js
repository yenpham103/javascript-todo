var btnSearch = document.querySelector(".search-box-btn");
// btnSearch.addEventListener("click", function () {
//   this.parentElement.classList.toggle("open");
// });
var searchBox = document.querySelector(".search-box");

btnSearch.addEventListener("click", function () {
  searchBox.classList.toggle("open");
});
