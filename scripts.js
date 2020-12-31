function refresh() {
    location.reload();
}

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
    console.log(games);
    let humanWinOutcome = `Game ${games}: You played ${humanSelection}, Computer played ${computerSelection} - you win!`;
    let humanLoseOutcome = `Game ${games}: You played ${humanSelection}, Computer played ${computerSelection} - you lose!`;
    let tieOutcome = `Game ${games}: You played ${humanSelection}, Computer played ${computerSelection} - it's a tie!`;
    let finalOutcome = `That's it! Game over. After 10 games, the final score is: You ${humanScore}, Computer ${computerScore}, Ties: ${ties}.`;
    function printResult(outcome) {
        resultsArea = document.getElementById("results");
        result = document.createElement("p");
        result.innerHTML = outcome;
        resultsArea.appendChild(result);
    }
    function gameOver() {
        printResult(finalOutcome);
        document.getElementById("rock").classList.add("disabled-btn");
        document.getElementById("paper").classList.add("disabled-btn");
        document.getElementById("scissors").classList.add("disabled-btn");
        startOver = document.createElement("p");
        startOver.innerHTML = 'Click "Start Over" to play again.';
        resultsArea.appendChild(startOver);
    }
    if ( //human wins
        (humanSelection === "Rock" && computerSelection === "Scissors") ||
        (humanSelection === "Paper" && computerSelection === "Rock") ||
        (humanSelection === "Scissors" && computerSelection === "Paper")
        ) {
        printResult(humanWinOutcome);
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
        printResult(humanLoseOutcome);
        games++;
        computerScore++;
        if (games === 11) {
            gameOver();
        }
    } else { //tie
        printResult(tieOutcome);
        games++;
        ties++;
        if (games === 11) {
            gameOver();
        }
    }
}