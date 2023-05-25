const displayResult = document.querySelector(`.result`);
const scoreResult = document.querySelector(`.score`);
const button = document.querySelectorAll(`button`);
button.forEach(button => button.addEventListener(`click`, playGame));
let scorePlayer = 0;
let scoreComp = 0;
window.onload = () => {
    displayResult.textContent = `Pick Rock Paper or Scissors to begin.`;
    scoreResult.textContent = `Your score will show up here.`
  };
function playGame(e){
    if (!e.target) return;
    let playerSelection = e.target.className;
    playRound(playerSelection, computerSelection());
    if (scorePlayer === 5 || scoreComp === 5) {
        gameResult();
        scorePlayer = 0;
        scoreComp = 0;
        setTimeout(function(){
        location.reload();
        }, 3000);
    }
}
function gameResult() {
    if (scorePlayer === 5) {
        return displayResult.textContent = `You win the game! WOW!`;
    } else {
        return displayResult.textContent = `You lost the game! Better luck next time!`
    }
}

let computerSelection = () => {
    let choice = Math.floor(Math.random() * 3);
    let computerSelection = [];
    switch (choice) {
        case 0:
            computerSelection.push(`rock`);
            break;
        case 1:
            computerSelection.push(`paper`);
            break;
        case 2:
            computerSelection.push(`scissors`);
            break;
    }
    return computerSelection;
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        displayResult.textContent = `It's a tie!`;
    } else if (playerSelection == `rock` && computerSelection == `scissors`) {
        displayResult.textContent = `You Win! Rock beats Scissors`;
        scorePlayer++;
    } else if (playerSelection == `paper` && computerSelection == `rock`) {
        displayResult.textContent = `You Win! Paper beats Rock`;
        scorePlayer++;
    } else if (playerSelection == `scissors` && computerSelection == `paper`) {
        displayResult.textContent = `You Win! Scissors beats Paper`;
        scorePlayer++;
    } else {
        displayResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        scoreComp++;
    }
    return scoreResult.textContent = `Player Score: ${scorePlayer} Computer Score: ${scoreComp}`;
};


