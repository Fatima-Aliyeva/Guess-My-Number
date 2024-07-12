let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message, color = "black") {
  const messageElement = document.querySelector(".message");
  messageElement.textContent = message;
  messageElement.style.color = color;
};

let score = document.querySelector(".variable-score");
let highscore = document.querySelector(".variable-highscore");

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  console.log(secretNumber);

  if (!guess) {
    displayMessage("Please, enter a number!", "red");
  } else if (guess === secretNumber) {
    displayMessage("You won<3");

    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#50C878";

    // Update highscore if the current score is higher
    if (parseInt(score.textContent) > parseInt(highscore.textContent)) {
      highscore.textContent = score.textContent;
    }
  } else {
    displayMessage(
      guess > secretNumber ? "Guess low number!" : "Guess high number!"
    );
    score.textContent = parseInt(score.textContent) - 1;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#ADD8E6";

  score.textContent = 20;
});
