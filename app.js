const board = document.getElementById("board");
const scoreBoard = document.getElementById("scoreBoard");
const gameOver = document.getElementById("gameOver");
const start = document.getElementById("start");

const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
  emptySquare: 0,
  snakeSquare: 1,
  foodSquare: 2,
};

const directions = {
  ArrowUp: -10,
  ArrowDown: 10,
  ArrowRight: 1,
  ArrowLeft: -1,
};

let snake;
let score;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;

const setGame = () => {
  snake = ["00", "01", "02", "03"];
  score = snake.length;
  direction = "arrrowRight";
  boardSquares = Array.from(Array(boardSize), () =>
    new Array(boardSize).fill(squareTypes.emptySquare)
  );
  console.log(boardSquares);
};

const startGame = () => {
  setGame();
};

start.addEventListener("click", startGame);
