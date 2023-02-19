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
    /*
    Return 7 for tie. Arbitrary starting number, I just wanted to stay away from 1 and 0.
    Return 8 for player score
    Return 9 for computer score
    */
    if (compChoice === playerChoice)
    {
        console.log('Tie!');
        return 7; 
    }

    if (compChoice === 'rock')
    {
        if (playerChoice === 'paper')
        {
            console.log('You win! Paper beats Rock.');
            return 8;
        }
        else if (playerChoice === 'scissors')
        {
            console.log('You lose! Rock beats Scissors');
            return 9;
        }
    }
    else if (compChoice=== 'paper')
    {
        if (playerChoice === 'rock')
        {
            console.log('You lose! Paper beats Rock.');
            return 9;
        }
        else if (playerChoice === 'scissors')
        {
            console.log('You win! Scissors beats Paper.');
            return 8;
        }
    }
    else
    {
        if (playerChoice === 'rock')
        {
            console.log('You win! Rock beats Scissors.');
            return 8;
        }
        else if (playerChoice === 'paper')
        {
            console.log('You lose! Rock beats Scissors.');
            return 9;
        }
    }
}

// Main program flow below

    /*  
    Generate random number between 1 to 3, then assign rock, paper, or scissors to computerSelection depending
    on the result
    */

let randomNumber = getComputerChoice(1, 4);
let computerSelection = assignComputerSelection(randomNumber);

    // Convert all the characters of player input to lower case 

let playerInput = prompt('Rock, paper, or scissors?', '');
let playerSelection = playerInput.toLowerCase();

    // Compare computerSelection and playerSelection

let roundResult = playRound(computerSelection, playerSelection);
