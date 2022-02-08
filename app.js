const board = document.querySelector("#board");
const scoreBoard = document.querySelector("#scoreBoard");
const gameOver = document.querySelector("#gameOver");
const start = document.querySelector(".start");

const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
  emptySquare: 0,
  snakeSquare: 1,
  foodSquare: 2,
};

const direction = {
  ArrowUp: -10,
  ArrowDown: 10,
  ArrowRight: 1,
  ArrowLeft: -1,
};

let snake;
let score;
let direction;
let boardSquare;
let emptySquare;
let moveInterval;

const setGame = () => {
  snake = ["00", "01", "02", "03"];
  score = snake.length;
  direction = "arrrowRight";
  boardSquare = Array.from(Array(boardSquare), () =>
    new Array(boardSize).fill(squareTypes.emptySquare)
  );
};

const startGame = () => {
  setGame();
};

start.addEventListener("click", startGame);
