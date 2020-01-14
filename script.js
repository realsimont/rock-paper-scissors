

const rock = document.querySelector("#human-rock");
const paper = document.querySelector("#human-paper");
const scissors = document.querySelector("#human-scissors");

const humanInsert = document.querySelector("#human-insert");
const computerInsert = document.querySelector("#computer-insert");
const resultInsert = document.querySelector("#result-insert");

rock.addEventListener('click', playHumanRock);
paper.addEventListener('click', playHumanPaper);
scissors.addEventListener('click', playHumanScissors);

function playHumanRock() {
    function computerSelection() {
        computerOptions = ["Rock", "Paper", "Scissors"];
        return computerOptions[Math.floor(Math.random() * computerOptions.length)];
        }
        let computerPlay = computerSelection();
    if (computerPlay == "Rock") {
        humanInsert.innerText = "You Played: Rock";
        computerInsert.innerText = "Computer Played: Rock";
        resultInsert.innerText = "It's a Tie";
    } else if (computerPlay == "Scissors") {
        humanInsert.innerText = "You Played: Rock";
        computerInsert.innerText = "Computer Played: Scissors";
        resultInsert.innerText = "You Win! Rock beats Scissors";
    } else if (computerPlay == "Paper") {
        humanInsert.innerText = "You Played: Rock";
        computerInsert.innerText = "Computer Played: Paper";
        resultInsert.innerText = "You Lose! Paper beats Rock";
    }
}

function playHumanPaper() {
    function computerSelection() {
        computerOptions = ["Rock", "Paper", "Scissors"];
        return computerOptions[Math.floor(Math.random() * computerOptions.length)];
        }
        let computerPlay = computerSelection();
    if (computerPlay == "Rock") {
        humanInsert.innerText = "You Played: Paper";
        computerInsert.innerText = "Computer Played: Rock";
        resultInsert.innerText = "You Win! Paper beats Rock";
    } else if (computerPlay == "Scissors") {
        humanInsert.innerText = "You Played: Paper";
        computerInsert.innerText = "Computer Played: Scissors";
        resultInsert.innerText = "You Win! Scissors beats Paper";
    } else if (computerPlay == "Paper") {
        humanInsert.innerText = "You Played: Paper";
        computerInsert.innerText = "Computer Played: Paper";
        resultInsert.innerText = "It's a Tie!";
    }
}

function playHumanScissors() {
    function computerSelection() {
        computerOptions = ["Rock", "Paper", "Scissors"];
        return computerOptions[Math.floor(Math.random() * computerOptions.length)];
        }
        let computerPlay = computerSelection();
    if (computerPlay == "Rock") {
        humanInsert.innerText = "You Played: Scissors";
        computerInsert.innerText = "Computer Played: Rock";
        resultInsert.innerText = "You Lose! Rock beats Scissors";
    } else if (computerPlay == "Scissors") {
        humanInsert.innerText = "You Played: Scissors";
        computerInsert.innerText = "Computer Played: Scissors";
        resultInsert.innerText = "It's a Tie!";
    } else if (computerPlay == "Paper") {
        humanInsert.innerText = "You Played: Scissors";
        computerInsert.innerText = "Computer Played: Paper";
        resultInsert.innerText = "You Win! Scissors beats Paper";
    }
}
