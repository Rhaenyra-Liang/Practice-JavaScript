let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageElement = document.querySelector("#message-el");
let sumElement = document.querySelector("#sum-el");
let cardElement = document.querySelector("#card-el");

function starGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card? 😌";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  messageElement.textContent = message;
  sumElement.textContent = "Sum: " + sum;
  cardElement.textContent = "Card: " + firstCard + "+" + secondCard;
}
