// this is  the snake games
const gameOverContainer = document.getElementById("gameOverContainer");
const myCanvas = document.getElementById("myCanvas");
// const restart = document.getElementById('restart');
const context = myCanvas.getContext("2d");
const blockSize = 25;
const rows = 20;
const cols = 20;
const scoreDisplay = document.getElementById("score");

//sounds for the game:
const startGameSound = new Audio("./music/game-start-6104.mp3");
const eatingAudio = new Audio("./music/shooting-sound-fx-159024.mp3");
const endGame = new Audio("./music/negative_beeps-6008.mp3");

let score = -1;
let endScore = document.getElementById("endScore");
let finalScore = -1;

let velocityX = 0;
let velocityY = 0;

// snake head position x and y...
let snakeX = 5 * blockSize;
let snakeY = 5 * blockSize;

// food postition x and y...
let foodX = 0;
let foodY = 0;

let gameOver = false;

// snack body...
const snackBody = [];

window.onload = function () {
  placeFood();
  document.addEventListener("keyup", changeDirection);
  setInterval(update, 100);
};

function update() {
  if (gameOver) {
    // check if game is over or not...
    return;
  }
  // Draw a red rectangle
  context.fillStyle = "black";
  context.fillRect(0, 0, 500, 500);

  //get the snake food...
  context.fillStyle = "yellow";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  // colision of food and snake
  if (snakeX == foodX && snakeY == foodY) {
    snackBody.push([foodX, foodY]);
    placeFood();
  }

  // move the body...
  for (let i = snackBody.length - 1; i > 0; i--) {
    snackBody[i] = snackBody[i - 1];
  }
  if (snackBody.length) {
    snackBody[0] = [snakeX, snakeY];
  }
  //get the snake head...
  context.fillStyle = "red";
  snakeX += velocityX * blockSize; // add the velocity x;
  snakeY += velocityY * blockSize; // add the velocity y
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  for (let i = 0; i < snackBody.length; i++) {
    context.fillRect(snackBody[i][0], snackBody[i][1], blockSize, blockSize);
  }

  // check is game over or not
  // check if snake goes the out of canvas
  if (
    snakeX < 0 ||
    snakeX >= cols * blockSize ||
    snakeY < 0 ||
    snakeY >= rows * blockSize
  ) {
    endGame.play();
    gameOver = true;
    gameOverContainer.style.display = "flex";
  }
  //  if snake collision then game over
  for (let i = 0; i < snackBody.length; i++) {
    if (snakeX == snackBody[i][0] && snakeY == snackBody[i][1]) {
      endGame.play();
      gameOver = true;
      gameOverContainer.style.display = "flex";
    }
  }
}

function placeFood() {
  // this function get the position of foot in random location
  // we use the random function to get the random numbers...
  eatingAudio.play(); // sound play
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
  score++;
  scoreDisplay.innerText = score * 10;

  finalScore = score;
  endScore.innerText = finalScore * 10;
  // startGameSound.play()
}

function changeDirection(e) {
  if (e.code == "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.code == "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.code == "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.code == "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  }
}
