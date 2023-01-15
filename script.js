// window.onload = function () {
//   document.querySelector("count-el").innerText = 5;
// };

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when button is clicked (log it out)
// change the count-el in HTML to reflect the new count

let countElement = document.querySelector("#count-el");
let count = 0;

function increment() {
  count += 1;
  countElement.innerText = count;
}

// 1. Creat a function, save(), which logs out the count when it's call

function save() {
  console.log(count);
}
