// 1. Start with Values (Rock, Paper, Scissors)
// 2. inputs (computerInput) and (userInput)
// 3. Calculate ending value (win or loss)
// 4. Display win or loss value
// 5. Loop game (steps 1-4) for 5 rounds
// 6. Determine a final winner

console.log(`hello world!`)

function getComputerChoice(choice) {
    choice = Math.floor(Math.random() * 3)
  switch (choice) {
    case 0:
      return 'ROCK'
    case 1:
      return 'PAPER'
    case 2:
      return 'SCISSORS'
    }
};
function getPlayerChoice(playerChoice) {
    // let playerChoice = prompt("")
}
function playRound(playerSelection, computerSelection) {
    let outcome = ``;
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    if (playerSelection === `rock` && computerSelection === `scissors`) {
        return outcome = `You Win!`;
    } else if (playerSelection === `paper` && computerSelection === `rock`) {
        return outcome = `You Win!`;
    } else if (playerSelection === `scissors` && computerSelection === `paper`) {
        return outcome = `You Win!`;
    } else { return outcome = `You Lose! and Suck!`}
};
