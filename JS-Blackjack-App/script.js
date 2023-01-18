let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageElement = document.querySelector("#message-el");
let sumElement = document.querySelector("#sum-el");
let cardElement = document.querySelector("#card-el");

function startGame() {
  cardElement.textContent = "Card: " + firstCard + " " + secondCard;
  sumElement.textContent = "Sum: " + sum;
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
}

function newCard() {
  // 1. Creat a card variable, and hard its value to a number (2-11)
  let card = 7;
  // 2. Add the new card to the sum variable
  sum += card;
  // 3. call startgame()
  //   startGame();
}
