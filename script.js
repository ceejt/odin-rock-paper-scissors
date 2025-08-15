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

function playGame() {
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
        for (let i = 1; i <= 5; i++) {
            playRound();
        }
        
        console.log('Final Score: You - ' + humanScore + ', Computer - ' + computerScore);
        if (humanScore > computerScore) {
            console.log('Congratulations! You won!');
        } else if (humanScore < computerScore) {
            console.log('Oh no you lost! :(');
        } else {
            console.log('It\'s a tie!');
        }
}