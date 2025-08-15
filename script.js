function playGame() {

}


function getComputerChoice() {
    const choice = Math.random();
    if (choice < 0.33) {
        return 'rock';
    } else if (choice < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    const choice = prompt("Choose rock, paper, or scissors: ");
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice.toLowerCase();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return console.log("Tie!");
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' || 
               humanChoice === 'paper' && computerChoice === 'rock' || 
               humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        return console.log('You win! ' + humanChoice + ' beats ' + computerChoice);
    } else {
        computerScore++;
        return console.log('You lose! ' + computerChoice + ' beats ' + humanChoice);
    } 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
