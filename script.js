function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! ${playerSelection} and ${computerSelection}!`;
    } 
    else if ((playerSelection === 'Rock' && computerSelection === 'Scissors')
        || (playerSelection === 'Paper' && computerSelection === 'Rock')
        || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } 
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
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