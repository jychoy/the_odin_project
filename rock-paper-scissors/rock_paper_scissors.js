let playerScore = 0;
let computerScore = 0;
let scoreLimit = 5;
let currentRound = 0;


const playerScoreKeep = document.getElementById("pScore");
const computerScoreKeep= document.getElementById("cScore");
const rockBtn = document.getElementById('buttonRock');
const paperBtn = document.getElementById('buttonPaper');
const scissorBtn = document.getElementById('buttonScissors');
const roundLeft = document.getElementById('counter');
const result = document.getElementById('displayWinner');

const playerMoves = [rockBtn, paperBtn, buttonScissors];
const moveArray = ["rock", "paper", "scissors"];

function play(){
	//use forEach to add eventListener to each button when clicked
	playerMoves.forEach(option => {
		option.addEventListener('click', function(){

			//const roundLeft = document.getElementById('counter');
			currentRound++;
			roundLeft.innerText = `Round ${currentRound}`;

			const playerSelection = this.innerText;
			//console.log("Player Move:",playerSelection)
			const computerSelection = computerPlay();
			//console.log("Computer move:",computerSelection)
			playRound(playerSelection,computerSelection);
			
			if (currentRound > scoreLimit){
				result.textContent="GAME OVER"
				reset()
			}
		})
	})
}


function playRound(playerSelection, computerSelection){
	//1. Compare player move with computer move
	//2. +1 score to winner, but if there is a tie then keep score the same and play another round	
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();

	if (playerSelection === computerSelection) {
		winner = "tie";
		console.log("Winner:",winner)
		console.log("Tie",playerSelection, computerSelection)
	}

	if ((playerSelection === "rock" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "rock")) {

		winner = "computer";
		computerScore++;
		computerScoreKeep.textContent = `Computer: ${computerScore}`;
		displayResult()
		console.log("Winner:", winner)
		console.log(playerSelection, computerSelection)
	}
	else {
		winner = "player";
		playerScore++;
		playerScoreKeep.textContent = `Player: ${playerScore}`;
		displayResult()
		console.log("Winner:", winner)
		console.log(playerSelection, computerSelection)
	}
}



function reset(){
	currentRound = playerScore = computerScore = 0;
	roundLeft.innerText = `Round ${currentRound}`;
	playerScoreKeep.textContent = `Player: ${playerScore}`;
	computerScoreKeep.textContent = `Computer: ${computerScore}`;

}

// computer will play a move based on random selection from the 3 moves available (rock,paper,scissors)
function computerPlay(){
	let computerMove = Math.floor((Math.random() * (moveArray.length)));
	//console.log(computerMove)
	switch (computerMove){
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
	}
}
function displayResult(){
	if (playerScore > computerScore){
		result.textContent="Winner: Player"
	}
	else if (playerScore <computerScore){
		result.textContent="Winner: Computer"
	}
	else{
		result.textContent="Winner: TIE"
	}
}

play()