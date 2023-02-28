'use strict';

// Main program flow

let computerScore = 0;
let playerScore = 0;
let buttons = document.querySelectorAll('button');

let randomNumber = 0;
let computerSelection = '';
let roundResult = 0;
let choice = '';

const playerChoice = document.querySelector('.player-choice');
const compChoice = document.querySelector('.comp-choice');

const myPara = document.createElement('p');
const compPara = document.createElement('p');

buttons.forEach(function(button)
{
    button.addEventListener('click', function(btn)
    {
        choice = btn.target.getAttribute('id');
        playerChoice.appendChild(myPara);
        myPara.textContent = `${choice.toUpperCase()}`;

        randomNumber = getComputerChoice(1, 4);
        computerSelection = assignComputerSelection(randomNumber);
        compChoice.appendChild(compPara);
        compPara.textContent = `${computerSelection.toUpperCase()}`;

        roundResult = playRound(computerSelection, choice);
        // Add div for player choice display

        if (roundResult === 8)
        {
            playerScore++;
        }
        else if (roundResult === 9)
        {
            computerScore++;
        }

        if (computerScore === 5)
        {
            // Add div

        }

        if (playerScore === 5)
        {
            // Add div

        }
    });
});

// Function declarations here

function getComputerChoice(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}

function assignComputerSelection(computerNumber)
    /*
    computerNumber will come from the
    random number generator
    */
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
    Return 7 for tie. Arbitrary starting number, I just
    wanted to stay away from 1 and 0.
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