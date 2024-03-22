var checkAll = document.querySelector(".check-all");
var checkItems = document.querySelectorAll(".check-item");
var btn = document.querySelector(".btn");
var count = 0;

var checked = true;

checkAll.addEventListener("change", function () {
  var status = this.checked;
  checkItems.forEach((checkItem) => {
    checkItem.checked = status;
    if (status) {
      btn.removeAttribute("disabled");
      btn.children[0].innerText = checkItems.length;
      count = checkItems.length;
    } else {
      btn.setAttribute("disabled", "disabled");
      btn.children[0].innerText = 0;
      count = 0;
    }
  });
});
checkItems.forEach((checkItem) => {
  checkItem.addEventListener("change", function () {
    checkItem.checked;
    if (checkItem.checked) {
      count++;
    } else {
      count--;
    }
    // checkAll.checked = count === checkItems.length;
    //Viet du la;
    if (count === checkItems.length) {
      checkAll.checked = true;
    } else {
      checkAll.checked = false;
    }

    if (count > 0) {
      btn.removeAttribute("disabled");
      btn.children[0].innerText = count;
    } else {
      btn.setAttribute("disabled", "disabled");
      btn.children[0].innerText = 0;
    }
  });
});
