'use strict';

function getComputerChoice(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}

// Generate random number between 1 to 3, then assign rock, paper, or scissors to computerSelection depending
// on the result

let randomNumber = getComputerChoice(1, 4);
let computerSelection = 0;

if (randomNumber === 1)
{
    computerSelection = 'rock';
}
else if (randomNumber === 2)
{
    computerSelection = 'paper';
}
else if (randomNumber === 3)
{
    computerSelection = 'scissors';
}



let playerInput = prompt('Rock, paper, or scissors?', '');
let playerSelection = playerInput.toLowerCase();

