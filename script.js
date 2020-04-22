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

function updateScores(result) {
	const youScore = document.getElementById('youScore');
	const cpuScore = document.getElementById('cpuScore');
	if (result === 1) {
		youScore.innerHTML = parseInt(youScore.innerHTML) + 1;
		youScore.classList.add('win');
		cpuScore.classList.remove('win');
	} else if (result === -1) {
		cpuScore.innerHTML = parseInt(youScore.innerHTML) + 1;
		cpuScore.classList.add('win');
		youScore.classList.remove('win');
	} else {
		youScore.classList.remove('win');
		cpuScore.classList.remove('win');
	}
}


		

function interfaceWithHTML(e) {
	const playerChoice = selectionToNumber(e.srcElement.id); 
	const result = winLossOrTie(playerChoice, computerPlay()); 
	console.log(result);
	updateScores(result);
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') {
		return; 
	}
	e.srcElement.classList.remove('playing');
}

const options = document.getElementsByClassName('option');

console.log(options);
Array.from(options).forEach(function (option, index) {
	option.addEventListener('click', interfaceWithHTML);
});



