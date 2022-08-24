console.log("hello world!");

let computerChoices = [
  { choice: "Rock", value: 0 },
  { choice: "Paper", value: 1 },
  { choice: "Scissors", value: 2 },
];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let result =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return result;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.value === computerSelection.value) {
    return "Tie!";
  } else if (playerSelection.value > computerSelection.value) {
    console.log("You win!");
  } else if (playerSelection.value < computerSelection.value) {
    console.log("You lose!");
  }
}

const playerSelection = { choice: "Rock", value: 0 };
console.log("Player selected", playerSelection);
const computerSelection = getComputerChoice();
console.log("Computer selected", computerSelection);

console.log(playRound(playerSelection, computerSelection));
