function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            return `It's a tie! ${playerSelection} and ${computerSelection}!`;
        } else if (computerSelection === 'Paper') {
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
        } else if (computerSelection === 'Scissors') {
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        } else if (computerSelection === 'Paper') {
            return `It's a tie! ${playerSelection} and ${computerSelection}!`;
        } else if (computerSelection === 'Scissors') {
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
        } else if (computerSelection === 'Paper') {
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        } else if (computerSelection === 'Scissors') {
            return `It's a tie! ${playerSelection} and ${computerSelection}!`;
        }
    }
}


const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();


//  function for computer's choice
//  randomly returns 'Rock', 'Paper', or 'Scissors' 
function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    const selectionsArr = ['Rock', 'Paper', 'Scissors'];
    return selectionsArr[randomInt];

}

// function for player's choice
// asks player to enter the choice
// takes its first letter in upper case
// if it is 'R' then playerSelection is 'Rock'
// if it is 'P' then playerSelection is 'Paper'
// otherwise playerSelection is 'Scissors'
function getPlayerSelection() {
    let playerSelection;
    playerSelection = prompt('Choose Rock, Paper or Scissors: ');
    const firstLetter = playerSelection[0].toUpperCase();
    if (firstLetter === 'R') {
        playerSelection = 'Rock';
    } else if (firstLetter === 'P') {
        playerSelection = 'Paper';
    } else {
        playerSelection = 'Scissors';
    }
    return playerSelection;
}

// console.log(playRound(playerSelection, computerSelection));
alert(playRound(playerSelection, computerSelection));