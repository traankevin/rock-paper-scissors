let humanScore = 0;
let computerScore = 0;

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
        document.getElementById('winner').innerText = 'You win! Rock beats Scissors.';
        humanScore++;
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("You win! Paper beats Rock.");
        document.getElementById('winner').innerText = 'You win! Paper beats Rock.';
        humanScore++;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("You win! Scissors beat Paper.");
        document.getElementById('winner').innerText = 'You win! Scissors beats Paper.';
        humanScore++;
    }
    else if (humanChoice == computerChoice) {
        console.log("It's a tie!");
        document.getElementById('winner').innerText = "It's a tie!";
    }
    else {
        console.log("You Lose! " + computerChoice + " beats " + humanChoice);
        document.getElementById('winner').innerText = 'You Lose! ' + computerChoice + ' beats ' + humanChoice + '.';
        computerScore++;
    }
    playerScore.textContent = "Player Score: " + humanScore;
    compScore.textContent = "Computer Score: " + computerScore;

    if (humanScore === 5 || computerScore === 5) {
        document.querySelector(".gameover").style.display = 'block';
        const gameWinner = document.getElementById('game_winner');
        gameWinner.textContent = humanScore === 5 ? 'You win the game!' : 'Computer wins the game!';

        document.querySelector("#rock_player").disabled = true;
        document.querySelector("#paper_player").disabled = true;
        document.querySelector("scissor_player").disabled = true;
    
    }


    document.getElementById('replay').addEventListener('click', () => {
        humanScore = 0;
        computerScore = 0;
        playerScore.textContent = "Player Score: " + humanScore;
        compScore.textContent = "Computer Score: " + computerScore;
        document.querySelector('.gameover').style.display = 'none';
        document.getElementById('winner').textContent = '';
        document.querySelector("#rock_player").disabled = false;
        document.querySelector("#paper_player").disabled = false;
        document.querySelector("scissor_player").disabled = false;
      });
      


}

function playGame(userSelection) {
    const computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);
}

const displayScore = document.querySelector(".prompt");
const playerScore = document.createElement("p");
playerScore.textContent = "Player Score: " + humanScore;
const compScore = document.createElement("p");
compScore.textContent = "Computer Score: " + computerScore;

displayScore.appendChild(playerScore);
displayScore.appendChild(compScore);


const rock_button = document.querySelector("#rock_player");
rock_button.addEventListener("click", function (e) {
    playGame('rock');
});
const paper_button = document.querySelector("#paper_player");
paper_button.addEventListener("click", function (e) {
    playGame('paper');
});
const scissors_button = document.querySelector("#scissors_player");
scissors_button.addEventListener("click", function (e) {
    playGame('scissors');
});


