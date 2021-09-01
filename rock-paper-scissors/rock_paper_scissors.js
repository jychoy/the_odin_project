let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const playerSelection = window.prompt("Player Move: ");
const computerSelection = computerPlay();
const moveArray = ["rock", "paper", "scissors"];
console.log(playRound(playerSelection, computerSelection));


function playRound(playerSelection, computerSelection){
	//1. Compare player move with computer move
	//2. +1 score to winner, but if there is a tie then keep score the same and play another round	
	
}

// computer will play a move based on random selection from the 3 moves available (rock,paper,scissors)
function computerPlay(){
	return Math.floor((Math.random() * moveArray.length() + 1))
}