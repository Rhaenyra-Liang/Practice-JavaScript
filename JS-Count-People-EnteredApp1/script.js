// window.onload = function () {
//   document.querySelector("count-el"). = 5;
// };

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when button is clicked (log it out)
// change the count-el in HTML to reflect the new count

let countElement = document.querySelector("#count-el");
let saveElement = document.querySelector("#save-el");
let count = 0;

function increment() {
  count += 1;
  countElement.textContent = count;
}

// 1. Creat a function, save(), which logs out the count when it's call
// 2. Creat a variable that contains both the count and the dash separator
// 3. Render the variable in the saveEL usng innerText
// Make sure to not delete the existing content of the paragraph

function save() {
  let countString = count + " - ";
  saveElement.textContent += countString;
  countElement.textContent = 0;
  count = 0;
}
