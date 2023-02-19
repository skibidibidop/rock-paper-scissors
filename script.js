'use strict';

function getComputerChoice(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}

function assignComputerSelection(computerNumber) // computerNumber will come from the random number generator
{
    if (computerNumber === 1)
    {
        return 'rock';
    }
    else if (computerNumber === 2)
    {
        return 'paper';
    }
    else if (computerNumber === 3)
    {
        return 'scissors';
    }
}

function playRound(compChoice, playerChoice)
{

}

// Generate random number between 1 to 3, then assign rock, paper, or scissors to computerSelection depending
// on the result

let randomNumber = getComputerChoice(1, 4);
let computerSelection = assignComputerSelection(randomNumber);

// Convert all the characters of player input to lower case 

let playerInput = prompt('Rock, paper, or scissors?', '');
let playerSelection = playerInput.toLowerCase();
