// window.onload = function () {
//   document.querySelector("count-el").innerText = 5;
// };

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when button is clicked (log it out)
// change the count-el in HTML to reflect the new count

let countElement = document.querySelector("#count-el");
console.log(countElement);

let count = 0;

function increment() {
  count = count + 1;
  countElement.innerText = count;
}
