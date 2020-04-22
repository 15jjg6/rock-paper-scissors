// Your JavaScript goes here!

function computerPlay() {
	return (Math.floor((Math.random() * 3)));
}
	
function numberToSelection(input) {
	switch(input) {
		case 0: 
			return 'Rock';
			break;
		case 1: 
			return 'Paper'; 
			break;
		case 2: 
			return 'Scissors';
	}
	return;
}

function playGame(playerSelection, computerSelection) {
	console.log(computerSelection);
	if (playerSelection === computerSelection) {
		return `Tie Game! You and your opponent both chose ${numberToSelection(playerSelection)}!` ; 
	} else if (playerSelection === (computerSelection  - 1) || (playerSelection === 2 && computerSelection === 0)) {
		return `You Lose! ${numberToSelection(playerSelection)} loses to ${numberToSelection(computerSelection)}`;
	} else {
		return `You Win! ${numberToSelection(playerSelection)} beats ${numberToSelection(computerSelection)}`;
	}
}

function sanatizeInput(humanInput) {
	const input = humanInput.toLowerCase();
	if (input === "rock" ) {
		return 0; 
	} else if (input === "paper") { 
		return 1; 
		}
	else if (input === "scissors") { 
		return 2 ;
	} else {
		throw "Incorrect Input";
		return;
	}
}

function main() { 
	while (1) {
		console.log("Hello! Please input your selection of rock paper or scissors. " ) ;
		const input = prompt("Choose rock paper or scissors: " );
		const input_as_number = sanatizeInput(input); 
		console.log(input_as_number)
		const result = playGame(input_as_number, computerPlay()); 
		prompt(result);
}
}

main();

