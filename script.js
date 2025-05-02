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

function playRound(humanChoice, computerChoice) {

    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("You win! Scissors beat Paper.");
        humanScore++;
    }
    else if (humanChoice == computerChoice) {
        console.log("It's a tie!");
    }
    else {
        console.log("You Lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
}

function playGame() {
    const userSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);
}

const rock_button = document.querySelector("#rock_player");
rock_button.addEventListener("click", function (e) {
    humanChoice = 'rock';
    console.log(humanChoice);
});
const paper_button = document.querySelector("#paper_player");
paper_button.addEventListener("click", function (e) {
    humanChoice = 'paper';
    console.log(humanChoice);
});
const scissors_button = document.querySelector("#scissors_player");
scissors_button.addEventListener("click", function (e) {
    humanChoice = 'scissors';
    console.log(humanChoice);
});



let humanScore = 0;
let computerScore = 0;

