let playerScore = 0;
let computerScore = 0;
let gameResultsMessage = '';

function playGame() {
    for (let i = 0; i <= 4; i++) {
        console.log('');
        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerChoice();
        console.log(`Round: ${i + 1}`);
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore === computerScore) {
        gameResultsMessage = `It's a draw!`;
    } else if (playerScore > computerScore) {
        gameResultsMessage = `You won the game!`;
    } else {
        gameResultsMessage = `You lost the game!`;
    }
    console.log('');
    console.log(`Results:\nYour score: ${playerScore}\nComputer score: ${computerScore}\n${gameResultsMessage}`);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! ${playerSelection} and ${computerSelection}!`;
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors')
        || (playerSelection === 'Paper' && computerSelection === 'Rock')
        || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    const selectionsArr = ['Rock', 'Paper', 'Scissors'];
    return selectionsArr[randomInt];
}

function getPlayerSelection() {
    let playerSelection = prompt(`Choose: Rock, Paper or Scissors\nor click 'OK' for random choice: `, '');
    if (playerSelection === '') {
        playerSelection = getComputerChoice();
    } else {
        const firstLetter = playerSelection[0].toUpperCase();
        if (firstLetter === 'R') {
            playerSelection = 'Rock';
        } else if (firstLetter === 'P') {
            playerSelection = 'Paper';
        } else {
            playerSelection = 'Scissors';
        }
    }
    return playerSelection;
}

playGame();