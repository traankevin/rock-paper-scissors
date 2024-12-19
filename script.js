function getComputerChoice() {
    let compNum = Math.floor(Math.random() * 3);
    if (compNum == 0) {
        return 'paper';
    }
    else if (compNum == 1) {
        return 'rock';
    }
    else {
        return 'scissors';
    }
}

function getPlayerChoice() {
    let player = prompt("Rock, Paper, Scissors?");
    let player2 = player.toLowerCase();
    return player2;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice =='rock' && computerChoice == 'paper') {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }
    else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log("You lose! Scissors beat Paper.");
        computerScore++;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("You win! Scissors beat Paper.");
        humanScore++;
    }
    else if (humanChoice == computerChoice) {
        console.log("It's a tie!");
    }
}

function playGame() {
    const userSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);
}

let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    playGame();
}
if (humanScore > computerScore) {
    console.log("You win the game with a score of: " + humanScore + " to " + computerScore);
}
else if (computerScore > humanScore) {
    console.log("You lose the game with a score of: " + computerScore + " to " + humanScore);
}
else {
    console.log("Its a tie with a score of: " + humanScore + " to " + computerScore);
}


