// 1. get computer choice  DONE (I think?)
// 1.1 get users choice
// 2. submit choice 
// 3. compare choice to computer
// 4. see if win or loss
// 5. loop 5 times
// 6. get win or loss final
// 7.

const playerSelection = prompt(`Please enter a value`);
computerSelection = getComputerChoice();

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let computerSelection = [];
    if (choice === 0) {
        computerSelection = "rock";
    }
    else if (choice === 1) {
        computerSelection = "paper";
    }
    else if (choice === 2) {
        computerSelection = "scissors";
    }
    return computerSelection;
}
function playRound(playerSelection, computerSelection) {
    let score;

    if (playerSelection === `rock` && computerSelection === `scissors`) {
        console.log(`You Win! Rock beats Scissors`);
    } else if (playerSelection === `paper` && computerSelection === `rock`) {
        console.log(`You Win! Paper beats Rock`)
    } else if (playerSelection === `scissors` && computerSelection === `paper`) {
        console.log(`You Win! Scissors beats Paper`)
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    }
    return score
};

playRound(playerSelection, computerSelection);

