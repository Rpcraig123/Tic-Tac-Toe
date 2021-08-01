// Global Variables Here
let xTurn = true;
const cells = document.body.querySelectorAll('.cell');
const status = document.body.querySelector('.status');
const turn = document.body.querySelector('.turn');
let gameTurns = 0;
let gameStatus = '';
const gameState = ["","","","","","","","",""];

////////////////////////////////
// Functions For Game Logic Here
function checkStatus(gameTurns) {
  let gameWinner = ''
  if (gameTurns == 9) {
    gameStatus = 'TIE!'
  }
  else {
    if ((gameState[0] !== "") && (gameState[0] === gameState[1] && gameState[0] === gameState[2])) {
      gameWinner = gameState[0]
    }
    else if ((gameState[3] !== "") && (gameState[3] === gameState[4] && gameState[3] === gameState[5])) {
      gameWinner = gameState[3]
    }
    else if ((gameState[6] !== "") && (gameState[6] === gameState[7] && gameState[6] === gameState[8])) {
      gameWinner = gameState[6]
    }
    else if ((gameState[0] !== "") && (gameState[0] === gameState[3] && gameState[0] === gameState[6])) {
      gameWinner = gameState[0]
    }
    else if ((gameState[1] !== "") && (gameState[1] === gameState[4] && gameState[1] === gameState[7])) {
      gameWinner = gameState[1]
    }
    else if ((gameState[2] !== "") && (gameState[2] === gameState[5] && gameState[2] === gameState[8])) {
      gameWinner = gameState[2]
    }
    else if ((gameState[0] !== "") && (gameState[0] === gameState[4] && gameState[0] === gameState[8])) {
      gameWinner = gameState[0]
    }
    else if ((gameState[2] !== "") && (gameState[2] === gameState[4] && gameState[2] === gameState[6])) {
      gameWinner = gameState[2]
    }
    if (gameWinner !== '') {
      gameStatus = `${gameWinner} WINS!`
    }
  }
  if (gameStatus !== '') {
    status.innerHTML = gameStatus
    status.style.opacity = 1
    console.log(gameState)
    for (let i = 0; i < cells.length; i++) {
      cells[i].classList.add('won');
    }
  }
}

////////////////////////////////
// Event Listeners Here
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function() {
    if (cells[i].classList.length == 1) {
      if (xTurn == true) {
        xTurn = false;
        cells[i].classList.add('x');
        cells[i].innerHTML = 'x'
        gameState[i] = 'X'
        gameTurns += 1;
        checkStatus(gameTurns)
        turn.innerHTML = 'Current Turn: O'
      }
      else {
        xTurn = true;
        cells[i].classList.add('o');
        cells[i].innerHTML = 'o'
        gameState[i] = 'O'
        gameTurns += 1;
        checkStatus(gameTurns)
        turn.innerHTML = 'Current Turn: X'
      }
    }
  });
};

////////////////////////////////