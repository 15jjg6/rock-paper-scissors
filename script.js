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

function selectionToNumber(humanInput) {
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

function winLossOrTie(player1, player2) {
	if (player1 === player2) {
		return 0; 	// tie
	} else if (player1 === (player2  - 1) || (player1 === 2 && player2 === 0)) {
		return -1; 	// loss
	} else {
		return 1;	// win
	}
}

function gameResult(playerChoice, computerChoice) {
	const result = winLossOrTie(playerChoice, computerChoice);
	if (result === 0) {
		return `Tie Game! You and your opponent both chose ${numberToSelection(playerChoice)}!` ; 
	} else if (result === -1) {
		return `You Lose! ${numberToSelection(playerChoice)} loses to ${numberToSelection(computerChoice)}`;
	} else {
		return `You Win! ${numberToSelection(playerChoice)} beats ${numberToSelection(computerChoice)}`;
	}
}
function interfaceWithHTML(e) {
	const playerChoice = selectionToNumber(e.srcElement.id); 
	const result = gameResult(playerChoice, computerPlay()); 
	const output = document.querySelector('#result-message'); 
	console.log(output);
	output.innerHTML = result;
	return;
}

const options = document.getElementsByClassName('option');

console.log(options);
Array.from(options).forEach(function (option, index) {
	option.addEventListener('click', interfaceWithHTML);
});

