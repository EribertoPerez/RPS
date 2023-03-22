// 1. get computer choice  DONE (I think?)
// 1.1 get users choice
// 2. submit choice 
// 3. compare choice to computer
// 4. see if win or loss
// 5. loop 5 times
// 6. get win or loss final
// 7.
const playerSelection = prompt(`Enter a value`)
const computerSelection = getComputerChoice();

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
function playRound(playerSelection, computerChoice) {
    if (playerSelection === `rock` && computerChoice === `scissors`) {

    }
}