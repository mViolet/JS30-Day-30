//did this one on my own!

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const cats = document.querySelectorAll('.cat');
const startButton = document.querySelector('.startButton');


let score = 0;

let gameTimeout;  //var to hold ID for timeout function
let go = false;    //var to hold whether event listener options should be applied

//populate paws
cats.forEach(cat => {
    cat.style.background = `url('images/kitty${random(1,7)}.svg') bottom center no-repeat`;
  });

//show current score
scoreBoard.textContent = `${score}`;

//start game
function startGame() {
  popUp(random(0,6));    //generates a random number and then pops a paw
  gameTimeout = setTimeout(startGame, 1000); //calls itself at 1 sec intervals
}

//generate random Int within a range (including min, excluding max)
function random(min,max) {
  return parseInt(Math.random() * (max - min) + min);
}

//add .up class to show paw
function popUp(number) {
  holes[number].classList.add('up');
  setTimeout(() => {
    holes[number].classList.remove('up');
  }, random(50, 1000));    //removes class after half a second
}

//event listener to control option to make btn clickable only once
startButton.addEventListener('click', () => {
  startGame();
}, {
  once: true  //unbinds click listener from start so user can't click more than once
});

//clickable paws to add to scoreBoard
cats.forEach(cat => {
  cat.addEventListener('click', () => {
    score++;
    scoreBoard.textContent = score;
  });
});

//restart function
function restart() {
  window.location.reload();
}