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

function play(playerScore, computerScore) {
    //person types their answer rock, paper, or scissors
    computerPlay();
    console.log(computerSelection)
    let playerSelection = prompt('Pick your weapon', 'rock');
    if ( computerSelection == playerSelection) {
        alert('there was a draw');
        return playerScore +=0
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        alert(`You lose, ${computerSelection} beats ${playerSelection}`);
        return computerScore +=1
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock') {
       alert(`You lose, ${computerSelection} beats ${playerSelection}`);
       return computerScore += 1
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper') {
       alert(`You lose, ${computerSelection} beats ${playerSelection}`);
       return computerScore += 1
    }
    else {
        alert(`You win, ${playerSelection} beats ${computerSelection}`);
        return playerScore +=1
    }
}

function playRound(playerScore, computerScore){
    playerScore = 0;
    computerScore = 0;
    while (playerScore <=3 || computerScore <=3) {
        play(playerScore, computerScore);
        console.log(`the score is Player: ${playerScore} to Computer: ${computerScore}`);
    }
}
