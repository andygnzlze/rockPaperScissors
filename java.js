//human vs computer

function computerPlay() {
    //computer randomly picks rock, paper, or scissors
    let num = Math.floor(Math.random()* 3 + 1)
    if (num == 1) {
       return computerSelection = 'rock';
    }
    if (num == 2) {
       return computerSelection ='paper';
    }
    else {
        return computerSelection = 'scissors';
    } 
}

// keep score first to 5
function updateComputerScore() {
    for(i=0)
}

function play() {
    //person types their answer rock, paper, or scissors
    computerPlay();
    console.log(computerSelection)
    let playerSelection = prompt('Pick your weapon', 'rock');
    if ( computerSelection == playerSelection) {
        alert('there was a draw');
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        alert(`You lose, ${computerSelection} beats ${playerSelection}`);
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock') {
       alert(`You lose, ${computerSelection} beats ${playerSelection}`);
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper') {
       alert(`You lose, ${computerSelection} beats ${playerSelection}`);
    }
    else {
        alert(`You win, ${playerSelection} beats ${computerSelection} `);
    }
}


