console.log("Hello World");

let playerSelection;
let computerSelection;
let result;

function getPlayerChoice() {
    playerSelection = prompt("What is your pick?");
    playerSelection = playerSelection.toLowerCase();
    let capitalize = playerSelection.slice(0,1);
    capitalize = capitalize.toUpperCase();
    playerSelection = capitalize + playerSelection.slice(1);
}

function getComputerChoice() {
    computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        computerSelection = "Rock"
    }
    else if (computerSelection === 1) {
        computerSelection = "Paper"
    }
    else if (computerSelection === 2) {
        computerSelection = "Scissors"
    }
    else {
        computerSelection = "Something has gone horribly wrong"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock" || 
        playerSelection === "Paper" && computerSelection === "Paper" ||
        playerSelection === "Scissors" && computerSelection === "Scissors") {
            return "Draw";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {
            return `You Wi! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === "Rock" && playerSelection === "Scissors" || 
        computerSelection === "Paper" && playerSelection === "Rock" ||
        computerSelection === "Scissors" && playerSelection === "Paper") {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
            return "Invalid option! You Lose! Choose Rock, Paper, or Scissors (case insensitive)"
    }
}


function game() {
    for (let i = 1; i < 6; i++) {
        console.log(`Round ${i}`);
        getComputerChoice();
        getPlayerChoice();
        console.log(computerSelection);
        console.log(playerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game())