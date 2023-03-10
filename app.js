"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

const messagePrint = function (message) {
  document.querySelector(".message").textContent = message;
};
const numberPrint = function (number) {
  document.querySelector(".number").textContent = number;
};

// document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    messagePrint("💥 Please enter number between 1 & 20");

    //when is correct
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = " 🎉 Correct Number 🎉";
    messagePrint("🎉 Correct Number 🎉");
    // document.querySelector(".number").textContent = secretNumber;
    numberPrint(secretNumber);
    document.querySelector("body").style.backgroundColor = "#228B22";
    document.querySelector(".guess").style.backgroundColor = "#FFFFFF";
    document.querySelector(".guess").style.color = "#000000";
    document.querySelector(".number").style.width = "300px";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    //when the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? " ⬆️ Too HIGH ⬆️" : "⬇️ Too LOW ⬇️";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "😔 You lost the game 😔";
      document.querySelector(".score").textContent = 0;
    }
  }
  //   //when is higher
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = " ⬆️ Too HIGH ⬆️";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent =
  //       "😔 You lost the game 😔";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   //when is lower
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "⬇️ Too LOW ⬇️";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent =
  //       "😔 You lost the game 😔";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});
document.querySelector(".again").addEventListener("click", function () {
  console.log("click");
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  messagePrint("Start guesing...");
  document.querySelector("body").style.backgroundColor = "#000000";
  document.querySelector(".guess").style.backgroundColor = "#000000";
  document.querySelector(".guess").style.color = "#ffffff";
  document.querySelector(".number").style.width = "150px";
  document.querySelector(".guess").value = "";
});
