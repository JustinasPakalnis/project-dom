const calcSectionDOM = document.getElementById("calc");
const minusDOM = calcSectionDOM.querySelector("button");
const plusDOM = calcSectionDOM.querySelector("button:last-child");
const numberDOM = calcSectionDOM.querySelector(".number");
console.log(numberDOM);

let count = 0;
numberDOM.textContent = count;
function up() {
  numberDOM.textContent = ++count;
}

function down() {
  numberDOM.textContent = --count;
}

minusDOM.addEventListener("click", down);
plusDOM.addEventListener("click", up);

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
console.log(screen1);
console.log(screen2);
const screen1plus1 = document.getElementById("screen1plus1");
const screen1plus2 = document.getElementById("screen1plus2");
const screen1plus3 = document.getElementById("screen1plus3");
const screen2plus1 = document.getElementById("screen2plus1");
const screen2plus2 = document.getElementById("screen2plus2");
const screen2plus3 = document.getElementById("screen2plus3");
const reset = document.getElementById("reset");
let score1 = 0;
let score2 = 0;
function scoreplus1() {
  screen1.textContent = score1 += 1;
}
function scoreplus2() {
  screen1.textContent = score1 += 2;
}
function scoreplus3() {
  screen1.textContent = score1 += 3;
}
screen1plus1.addEventListener("click", scoreplus1);
screen1plus2.addEventListener("click", scoreplus2);
screen1plus3.addEventListener("click", scoreplus3);
function scoreplus11() {
  screen2.textContent = score2 += 1;
}
function scoreplus21() {
  screen2.textContent = score2 += 2;
}
function scoreplus31() {
  screen2.textContent = score2 += 3;
}
function resetRes() {
  screen1.textContent = 0;
  screen2.textContent = 0;
}
screen2plus1.addEventListener("click", scoreplus11);
screen2plus2.addEventListener("click", scoreplus21);
screen2plus3.addEventListener("click", scoreplus31);
reset.addEventListener("click", resetRes);
