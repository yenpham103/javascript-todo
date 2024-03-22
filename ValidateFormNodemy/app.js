// var username = document.querySelector("#username");
// var email = document.querySelector("#email");
// var password = document.querySelector("#password");
// var confirmPassword = document.querySelector("#confirm-password");
// var form = document.querySelector("form");

// function showError(input, message) {
//   let parent = input.parentElement;
//   let small = parent.querySelector("small");
//   parent.classList.add("error");
//   small.innerText = message;
// }

// function showSuccess(input) {
//   let parent = input.parentElement;
//   let small = parent.querySelector("small");
//   parent.classList.remove("error");
//   small.innerText = "";
// }

// function checkEmptyError(listInput) {
//   let isEmptyError = false;
//   listInput.forEach((input) => {
//     input.value = input.value.trim();
//     if (input.value === "") {
//       isEmptyError = true;
//       showError(input, "Không được để trống");
//     } else {
//       showSuccess(input);
//     }
//   });
//   return isEmptyError;
// }

// function checkEmailError(input) {
//   const regexEmail =
//     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   input.value = input.value.trim();
//   let isEmailError = !regexEmail.test(input.value);
//   if (regexEmail.test(input.value)) {
//     showSuccess(input);
//   } else {
//     showError(input, "Email Invalid");
//   }
//   return isEmailError;
// }
// function checkLengthError(input, min, max) {
//   input.value = input.value.trim();
//   if (input.value.length < min) {
//     showError(input, `Phải có ít nhất ${min} kí tự`);
//     return true;
//   }
//   if (input.value.length > max) {
//     showError(input, `Không được vượt quá ${max} kí tự`);
//     return true;
//   }
//   return false;
// }
// function checkMatchPasswordError(passwordInput, confirmPasswordInput) {
//   if (passwordInput.value !== confirmPasswordInput.value) {
//     showError(confirmPasswordInput, "Mật khẩu không trùng khớp");
//     return true;
//   }
//   return false;
// }
// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let isEmptyError = checkEmptyError([
//     username,
//     email,
//     password,
//     confirmPassword,
//   ]);
//   let isEmailError = checkEmailError(email);
//   let isUsernameLengthError = checkLengthError(username, 6, 10);
//   let isPasswordLengthError = checkLengthError(password, 6, 10);
//   let isMatchError = checkMatchPasswordError(password, confirmPassword);
//   if (
//     isEmptyError ||
//     isEmailError ||
//     isUsernameLengthError ||
//     isPasswordLengthError
//   ) {
//     //do nothing
//   } else {
//     //call api , logic
//   }
// });

//Code lai

var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirm-password");
var form = document.querySelector("form");

function showError(input, message) {
  console.log(input);
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerText = message;
}

function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerText = "";
}

function checkEmptyError(listInput) {
  listInput.forEach((input, index) => {
    console.log(input);
    let isEmptyError = false;
    input.value = input.value.trim();
    if (input.value === "") {
      isEmptyError = true;
      showError(input, "Không được bỏ trống");
    } else {
      showSuccess(input);
    }
  });
}

function checkLengthUsername(input, min, max) {
  input.value = input.value.trim();
  if (input.value.length < min) {
    showError(input, `Không được nhỏ hơn ${min} kí tự`);
    return true;
  }
  if (input.value.length > max) {
    showError(input, `Không vượt quá ${max} kí tự`);
    return true;
  }
  return false;
}

function checkEmailError(input) {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  input.value = input.value.trim();
  let isEmailError = !regexEmail.test(input.value);
  if (regexEmail.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email Invalid");
  }
}

function checkPasswordError(input, min, max) {
  input.value = input.value.trim();
  if (input.value.length < min) {
    showError(input, `Mật khẩu phải lớn hơn ${min} kí tự`);
    return true;
  }
  if (input.value.length > max) {
    showError(input, `Mật khẩu phải nhỏ hơn ${max} kí tự`);
    return true;
  }
  return false;
}

function checkConfirmPassword(passwordInput, confirmPasswordInput) {
  if (passwordInput.value !== confirmPasswordInput.value) {
    showError(confirmPasswordInput, "Mật khẩu không trùng khớp");
    return true;
  }
  return false;
}
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isEmptyError = checkEmptyError([
    username,
    email,
    password,
    confirmPassword,
  ]);
  let isCheckLengthUsername = checkLengthUsername(username, 6, 15);
  let isEmailError = checkEmailError(email);
  let isPasswordError = checkPasswordError(password, 6, 15);
  let isConfirmPassword = checkConfirmPassword(password, confirmPassword);
  if (
    isCheckLengthUsername ||
    isEmailError ||
    isPasswordError ||
    isConfirmPassword
  ) {
    //Khong lam gi ca
  } else {
    //call api, logic
  }
});
