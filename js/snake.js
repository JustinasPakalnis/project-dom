//Pasaulio dydis - 10x10
const formDOM = document.forms[0];
const [widthDOM, heightDOM] = formDOM.querySelectorAll("input");
const [widthNoteDOM, heighNotetDOM] = formDOM.querySelectorAll(".note");
const worldDOM = document.getElementById("world");

console.log([worldDOM]);

const { clientHeight, clientWidth } = worldDOM;
const cellSize = 48;

const width = Math.floor(clientWidth / cellSize);
const height = Math.floor(clientHeight / cellSize);

widthDOM.max = width;
widthDOM.value = width;
widthNoteDOM.textContent = "max: " + width;

heightDOM.max = height;
heightDOM.value = height;
heighNotetDOM.textContent = "max: " + height;

// worldDOM.innerHTML =  <div class="row"> +"<div class="cell"></div>".repeat(width) + </div>.repeat(height);
worldDOM.innerHTML = `<div class="row">${`<div class="cell"></div>`.repeat(
  width
)}</div>`.repeat(height);
worldDOM.innerHTML =
  `<div class="row">${'<div class="cell"></div>'.repeat(width)}</div>`.repeat(
    height
  ) +
  '<img class="snake" style="top: 0px; left: 0px" src="./snake sqr.png" alt="snake"/>' +
  '<img class="chicken" style="top: 0px; left: 0px" src="./chicken sqr.png" alt="snake"/>';

const snakeDOM = document.querySelector(".snake");
const chickenDOM = document.querySelector(".chicken");

const snakePosition = {
  x: 0,
  y: 0,
};
snakeDOM.style.top = snakePosition.y * cellSize + "px";
snakeDOM.style.left = snakePosition.x * cellSize + "px";

const chickenPosition = {
  x: 0,
  y: 0,
};
chickenDOM.style.top = chickenPosition.y * cellSize + "px";
chickenDOM.style.left = chickenPosition.x * cellSize + "px";
