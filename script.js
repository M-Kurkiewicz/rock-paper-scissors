let answers = [
    "rock",
    "paper",
    "scissors"
]

function getComputerChoice() {
    return answers[Math.floor(Math.random() * answers.length)];
}

let userScore = 0;
let computerScore = 0;

function playRound() {
    computerSelection = getComputerChoice()
    playerSelection = prompt("Rock / Paper / Scissors").toLowerCase()
    alert("You picked " + playerSelection + ", computer picked " + computerSelection)
    if(playerSelection == "rock"){
        if(computerSelection == "rock") {
            alert("Tie")
        }
        else if(computerSelection == "paper") {
            alert("Lose")
            computerScore += 1
        }
        else {
            alert("Win")
            userScore += 1;
        }
    }
    else if (playerSelection == "paper") {
        if(computerSelection == "rock") {
            alert("Win")
            userScore += 1;
        }
        else if(computerSelection == "paper") {
            alert("Tie")
        }
        else {
            alert("Lose")
            computerScore += 1;
        }
    }
    else {
        if(computerSelection == "rock") {
            alert("Lose")
            computerScore += 1;
        }
        else if(computerSelection == "paper") {
            alert("Win")
            userScore += 1;
        }
        else {
            alert("Tie")
        }
    }
}


function game() {
    while(userScore < 5 && computerScore < 5) {
        playRound()
        console.log(userScore,computerScore)
    }
}
game()

