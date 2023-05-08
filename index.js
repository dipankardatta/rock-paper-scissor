function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const result = Math.floor(Math.random() * 3);
    return choices[result];
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose rock, paper or scissors:').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection).startsWith("You win!")) {
            playerScore++;
        } else if (playRound(playerSelection, computerSelection).startsWith("You lose!")) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("You win the game! Your score: " + playerScore + ", Computer score: " + computerScore);
    } else if (playerScore < computerScore) {
        console.log("You lose the game! Your score: " + playerScore + ", Computer score: " + computerScore);
    } else {
        console.log("It's a tie! Your score: " + playerScore + ", Computer score: " + computerScore);
    }
}
