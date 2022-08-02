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

picks = document.querySelector("#picks")
result = document.querySelector("#result")
score = document.querySelector("#score")

function playRound(playerSelection) {
    computerSelection = getComputerChoice()
    // playerSelection = prompt("Rock / Paper / Scissors").toLowerCase()
    picks.textContent = "You picked " + playerSelection + ", computer picked " + computerSelection;
    result.style.fontWeight = "bold"
    winner.textContent = ""
    if(playerSelection == "rock"){
        if(computerSelection == "rock") {
            result.textContent = "Tie"
        }
        else if(computerSelection == "paper") {
            result.textContent = "Lose"
            computerScore += 1
        }
        else {
            result.textContent = "Win"
            userScore += 1;
        }
    }
    else if (playerSelection == "paper") {
        if(computerSelection == "rock") {
            result.textContent = "Win"
            userScore += 1;
        }
        else if(computerSelection == "paper") {
            result.textContent = "Tie"
        }
        else {
            result.textContent = "Lose"
            computerScore += 1;
        }
    }
    else {
        if(computerSelection == "rock") {
            result.textContent = "Lose"
            computerScore += 1;
        }
        else if(computerSelection == "paper") {
            result.textContent = "Win"
            userScore += 1;
        }
        else {
            result.textContent = "Tie"
        }
    }
    score.textContent = "Your score: " + userScore + " Computer score: " + computerScore;
    if(userScore == 5) {
        winner.textContent = "Congratulations, you win!";
        userScore = 0;
        computerScore = 0;
    }
    else if(computerScore == 5) {
        winner.textContent = "Unfortunately, you lose!"
        userScore = 0;
        computerScore = 0;
    }
}


function game(t) {
    while(userScore < t && computerScore < t) {
        playRound()
        console.log(userScore,computerScore)
    }
}

function Printer(){
    console.log("I am iad")
}



// buttons = document.querySelectorAll('button');
// buttons.forEach((button) => {
//     button.addEventListener('click', playRound);
//   });

// rock = document.querySelector("#rock")
// paper = document.querySelector("#paper")
// scissors = document.querySelector("#scissors")

