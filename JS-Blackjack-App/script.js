let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard]; // array ordered list of item
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageElement = document.querySelector("#message-el");
let sumElement = document.querySelector("#sum-el");
let cardElement = document.querySelector("#card-el");

// Creat  a new function called startGame() that calls rendergame()
function startGame() {
  renderGame();
}

function renderGame() {
  // render out firstcCard and secondCard
  cardElement.textContent = "Cards: " + cards[0] + " " + cards[1];
  // render out All the card we havw
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
  renderGame();
}
