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

// function getHumanChoice() {
//     const choice = prompt("Choose rock, paper, or scissors: ");
//     if (choice === "rock" || choice === "paper" || choice === "scissors") {
//         return choice.toLowerCase();
//     }
// }

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const maxScore = 5;

    const roundResult = document.querySelector('.round-result');
    const scoreDisplay = document.querySelector('.score');
    const finalResult = document.querySelector('.final-result');


    function playRound(humanChoice, computerChoice) {
        if (humanScore >= maxScore || computerScore >= maxScore) {
            humanScore = 0;
            computerScore = 0;
            finalResult.textContent = '';
        }

        roundResult.textContent = 'You chose ' + humanChoice + ', Computer chose ' + computerChoice + '. ';

        let roundMessage = '';

        if (humanChoice === computerChoice) {
            roundMessage = "Tie!";
        } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
               (humanChoice === 'paper' && computerChoice === 'rock') || 
               (humanChoice === 'scissors' && computerChoice === 'paper')) {
            humanScore++;
            roundMessage = " You win! " + humanChoice + " beats " + computerChoice + ".";
        } else {
            computerScore++;
            roundMessage = " You lose! " + computerChoice + " beats " + humanChoice + ".";
        } 

        roundResult.textContent += roundMessage;
        scoreDisplay.textContent = "Score - You: " + humanScore + ", Computer: " + computerScore;

        if ((humanScore >= maxScore) || (computerScore >= maxScore)) {
        if (humanScore > computerScore) {
            finalResult.textContent = "Congratulations! You won!";
        } else if (humanScore < computerScore) {
            finalResult.textContent = "Oh no you lost! :(";
        } else {
            finalResult.textContent = "It's a tie!";
        }
    }
}
    const rockBtn = document.querySelector('.Rock');
    const paperBtn = document.querySelector('.Paper');
    const scissorsBtn = document.querySelector('.Scissors');

    rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice()));

    paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice()));

    scissorsBtn.addEventListener('click', () => playRound ('scissors', getComputerChoice()));

        // for (let i = 1; i <= 5; i++) {
        //     const humanSelection = getHumanChoice();
        //     const computerSelection = getComputerChoice();

        //     playRound(humanSelection, computerSelection);
        // }

        // console.log('Final Score: You - ' + humanScore + ', Computer - ' + computerScore);
        // if (humanScore > computerScore) {
        //     console.log('Congratulations! You won!');
        // } else if (humanScore < computerScore) {
        //     console.log('Oh no you lost! :(');
        // } else {
        //     console.log('It\'s a tie!');
        // }
}
playGame();