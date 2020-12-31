let computerSelection;
function computerSelect() {
    random = Math.floor(Math.random() * 3);
    if (random === 0) {
        computerSelection = "Rock";
    } else if (random === 1) {
        computerSelection = "Paper";
    } else if (random === 2) {
        computerSelection = "Scissors";
    }
}

let games = 1;
let humanScore = 0;
let computerScore = 0;
let ties = 0;

function playRound(humanSelection) {
    let winOutcome = `Game ${games}: You played ${humanSelection}, Computer played ${computerSelection} - you win!`;
    let loseOutcome = `Game ${games}: You played ${humanSelection}, Computer played ${computerSelection} - you lose!`;
    let tieOutcome = `Game ${games}: You played ${humanSelection}, Computer played ${computerSelection} - it's a tie!`;
    function printResult(outcome) {
        resultsArea = document.getElementById("results");
        result = document.createElement("p");
        result.classList.add("result");
        result.innerHTML = outcome;
        resultsArea.appendChild(result);
    }
    function gameOver() {
        finalResult = `That's it! Game over. After 10 games, the final score is: You ${humanScore}, Computer ${computerScore}, Ties: ${ties}.`;
        printResult(finalOutcome);
    }
    if ( //human wins
        (humanSelection === "Rock" && computerSelection === "Scissors") ||
        (humanSelection === "Paper" && computerSelection === "Rock") ||
        (humanSelection === "Scissors" && computerSelection === "Paper")
        ) {
        console.log(`Game ${games}: You played ${humanSelection}, Computer played ${computerSelection} - you win!`);
        printResult(winOutcome);
        games++;
        humanScore++;
        if (games === 11) {
            gameOver();
        }
    } else if ( //computer wins
        (computerSelection === "Rock" && humanSelection === "Scissors") ||
        (computerSelection === "Paper" && humanSelection === "Rock") ||
        (computerSelection === "Scissors" && humanSelection === "Paper") 
    ) {
        console.log(`Game ${games}: You played ${humanSelection}, Computer played ${computerSelection} - you lose!`);
        printResult(loseOutcome);
        games++;
        computerScore++;
        if (games === 11) {
            gameOver();
        }
    } else { //tie
        console.log(`Game ${games}: You played ${humanSelection}, Computer played ${computerSelection} - it's a tie!`);
        printResult(tieOutcome);
        games++;
        ties++;
        if (games === 11) {
            gameOver();
        }
    }
}