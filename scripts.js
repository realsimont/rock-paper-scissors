// initialise starting scores and make available through game
let games = 1; //start at 1 to count normally when we print this
let humanScore = 0;
let computerScore = 0;
let ties = 0;

function playRound(humanSelection) {

  let computerSelection;
  function computerSelect() {
    random = Math.floor(Math.random() * 3);
    if (random === 0) { computerSelection = "Rock";}
    else if (random === 1) { computerSelection = "Paper"; }
    else if (random === 2) { computerSelection = "Scissors"; }
  }

  computerSelect();
  if (humanSelection === computerSelection) {
    printResultOnPage(`Game ${games}: You played ${humanSelection}, Computer played ${computerSelection} - it's a tie!`);
    games++;
    ties++;
  } else if ( // human wins
    (humanSelection === "Rock" && computerSelection === "Scissors") ||
    (humanSelection === "Paper" && computerSelection === "Rock") ||
    (humanSelection === "Scissors" && computerSelection === "Paper")
    ) {
    printResultOnPage(`Game ${games}: You played ${humanSelection}, Computer played ${computerSelection} - you lose!`);
    games++;
    humanScore++;
  } else { // computer wins
    printResultOnPage(`Game ${games}: You played ${humanSelection}, Computer played ${computerSelection} - you win!`);
    games++;
    computerScore++;
  }
  if (games === 11) { gameOver(); }

  function gameOver() {
    printResultOnPage(`That's it! Game over. After 10 games, the final score is: You ${humanScore}, Computer ${computerScore}, Ties: ${ties}.`);
    // document.querySelectorAll(".btn").classList.add("disabled-btn");
    btns = document.querySelectorAll(".btn")
    for (i = 0; i < btns.length; i++) {
      btns[i].classList.add("disabled-btn");
    }
    startOver = document.createElement("p");
    startOver.innerHTML = 'Click "Start Over" to play again.';
    resultsArea.appendChild(startOver);
  }

  function printResultOnPage(outcome) {
    resultsArea = document.getElementById("results");
    result = document.createElement("p");
    result.innerHTML = outcome;
    resultsArea.appendChild(result);
  }
}

function refresh() { //simple clear all function
  location.reload();
}
