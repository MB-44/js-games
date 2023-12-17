// hey before you look into this, idk how to play rock paper scissor, in case change the however you like
// only the getResult function, the process is in here, just add or remove something in that getResult if statements
// bye bye fellows! 

const computerChoiceDisplay = document.getElementById('Computer_choice');
const userChoiceDisplay = document.getElementById('User_choice');
const resultDisplay = document.getElementById('Result');

const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // 3
    
    if (randomNumber === 1) {
        computerChoice = 'Rock';
    }
    if (randomNumber === 2) {
        computerChoice = "Scissors";
    }
    if (randomNumber === 3) {
        computerChoice = "Paper";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!";
    }
    if (computerChoice === "Rock" && userChoice === "Paper") {
        result = "You Win!";
    }
    if (computerChoice === "Rock" && userChoice === "Scissors") {
        result = "You lost!";
    }
    if (computerChoice === "Paper" && userChoice === "Rock") {
        result = "You lost!"
    }
    if (computerChoice === "Paper" && userChoice === "Rock") {
        result = "You lost!"
    }
    if (computerChoice === "Paper" && userChoice === "Rock") {
        result = "You lost!"
    }
    resultDisplay.innerHTML = result;
}