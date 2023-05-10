let score = 0;
let game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(`Please enter a choice`).toLowerCase();
        playRound(playerSelection, `${computerSelection()}`);
        }
    // if (score >= 3) {
    //     console.log(`You Win!`)
    // } else if (score <= 2) {
    //     console.log(`You lose!`)
    // }
};
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
    if (playerSelection === computerSelection) {
        console.log(`It's a tie!`)
    } else if (playerSelection === `rock` && computerSelection === `scissors`) {
        console.log(`You Win! Rock beats Scissors`);
        score++;
    } else if (playerSelection === `paper` && computerSelection === `rock`) {
        console.log(`You Win! Paper beats Rock`)
        score++;
    } else if (playerSelection === `scissors` && computerSelection === `paper`) {
        console.log(`You Win! Scissors beats Paper`)
        score++;
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    }
    console.log(score);
    return score;
};
game();


