"use strict";

const btnCheck = document.querySelector(".check");
let body = document.querySelector("body");
let scoreTotal = document.querySelector(".score");
let input = document.querySelector(".guess");
let message = document.querySelector(".message");
let again = document.querySelector(".again");
let number = document.querySelector(".number");
let score = 20;
let maxScore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (msg) {
  message.textContent = msg;
};
btnCheck.addEventListener("click", function () {
  const guess = Number(input.value.trim());
  if (!guess) {
    displayMessage("🤷‍♂️ No Number");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    number.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";
    number.style.width = "500px";
    if (score > maxScore) {
      maxScore = score;
      let hightScore = document.querySelector(".highscore");
      hightScore.textContent = maxScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? "Too hight!" : "Too Low!");
      scoreTotal.textContent = --score;
    } else {
      displayMessage("You are loser🃏");
    }
  }
});
again.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing ...");
  scoreTotal.textContent = score;
  number.textContent = "?";
  input.value = "";
  body.style.backgroundColor = "#222";
});
