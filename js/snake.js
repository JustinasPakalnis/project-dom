//Pasaulio dydis - 10x10
const formDOM = document.forms[0];
const [widthDOM, heightDOM] = formDOM.querySelectorAll("input");
const [widthNoteDOM, heighNotetDOM] = formDOM.querySelectorAll(".note");
const worldDOM = document.getElementById("world");
const skaiciuokle = document.getElementById("pagavau");
console.log(skaiciuokle);

const cellSize = 48;
let snakeDOM = null;
let chickenDOM = null;
let pagavau = 0;
const snakePosition = {
  x: 2,
  y: 3,
};
const chickenPosition = {
  x: 2,
  y: 2,
};
const world = {
  width: 2,
  height: 2,
};
function renderWorld() {
  worldDOM.innerHTML =
    `<div class="row">${'<div class="cell"></div>'.repeat(
      world.width
    )}</div>`.repeat(world.height) +
    '<img class="snake" style="top: 0px; left: 0px" src="./snake sqr.png" alt="snake"/>' +
    '<img class="chicken" style="top: 0px; left: 0px" src="./chicken sqr.png" alt="snake"/>';
  snakeDOM = document.querySelector(".snake");
  chickenDOM = document.querySelector(".chicken");

  snakeDOM.style.top = snakePosition.y * cellSize + "px";
  snakeDOM.style.left = snakePosition.x * cellSize + "px";

  chickenDOM.style.top = chickenPosition.y * cellSize + "px";
  chickenDOM.style.left = chickenPosition.x * cellSize + "px";
}
function randomChickenPosition() {
  let foundPair = false;
  while (!foundPair) {
    const newX = Math.floor(Math.random() * world.width);
    const newY = Math.floor(Math.random() * world.height);
    if (newX !== snakePosition.x || newY !== snakePosition.y) {
      chickenPosition.x = newX;
      chickenPosition.y = newY;
      foundPair = true;
    }
  }
}
function gameOfSNakeAndChicken() {
  const { clientHeight, clientWidth } = worldDOM;

  const width = Math.floor(clientWidth / cellSize);
  const height = Math.floor(clientHeight / cellSize);

  world.width = width;
  world.height = height;

  widthDOM.max = width;
  widthDOM.value = width;
  widthNoteDOM.textContent = "max: " + width;

  heightDOM.max = height;
  heightDOM.value = height;
  heighNotetDOM.textContent = "max: " + height;
  snakePosition.x = Math.floor(world.width / 2);
  snakePosition.y = Math.floor(world.height / 2);
  randomChickenPosition();
  renderWorld();
}
gameOfSNakeAndChicken();

window.addEventListener("keypress", (event) => {
  if (event.key === "w") {
    if (snakePosition.y > 0) {
      snakePosition.y--;
    } else if (snakePosition.y === 0) {
      snakePosition.y = world.height - 1;
    }
  }
  if (event.key === "a") {
    if (snakePosition.x > 0) {
      snakePosition.x--;
    } else if (snakePosition.x === 0) {
      snakePosition.x = world.width - 1;
    }
  }
  if (event.key === "s") {
    if (snakePosition.y < world.height - 1) {
      snakePosition.y++;
    } else if (snakePosition.y === world.height - 1) {
      snakePosition.y = 0;
    }
  }
  if (event.key === "d") {
    if (snakePosition.x < world.width - 1) {
      snakePosition.x++;
    } else if (snakePosition.x === world.width - 1) {
      snakePosition.x = 0;
    }
  }
  snakeDOM.style.top = snakePosition.y * cellSize + "px";
  snakeDOM.style.left = snakePosition.x * cellSize + "px";
  if (
    snakePosition.x === chickenPosition.x &&
    snakePosition.y === chickenPosition.y
  ) {
    pagavau++;
    skaiciuokle.innerText = pagavau;
    console.log(pagavau);
    randomChickenPosition();

    chickenDOM.style.top = chickenPosition.y * cellSize + "px";
    chickenDOM.style.left = chickenPosition.x * cellSize + "px";
  }
});

window.addEventListener("resize", gameOfSNakeAndChicken);

formDOM.addEventListener("submit", (event) => {
  event.preventDefault();
  world.width = +widthDOM.value;
  world.height = +heightDOM.value;
  renderWorld();
});
