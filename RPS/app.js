// 1. get computer choice  DONE (I think?)
// 1.1 get users choice
// 2. submit choice 
// 3. compare choice to computer
// 4. see if win or loss
// 5. loop 5 times
// 6. get win or loss final
// 7.

function getComputerChoice(computerChoice) {
    let choice = Math.floor(Math.random() * 3);
    computerChoice = [];
    if (choice === 0){
        computerChoice = "rock";
    }
    else if (choice === 1){
        computerChoice = "paper";
    }
    else if(choice === 2){
        computerChoice = "scissors";
    }
    return computerChoice;
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === `rock` && computerSelection === `scissors`) {
        console.log(`You Win! Rock beats Scissors`);
    } else if (playerSelection === `paper` && computerSelection === `rock`) {
        console.log(`You Win! Paper beats Rock`)
    } else if (playerSelection === `scissors` && computerSelection === `paper`) {
        console.log(`You Win! Scissors beats Paper`)
    } else {
        console.log(`You Lose! I don't know why?`)
    }
}

const playerSelection = document.getElementById(`userInput`).value;
const computerSelection = getComputerChoice();
// playerSelection.addEventListener(`submit`, (e) => {
//     playRound(playerSelection, computerSelection);
// })