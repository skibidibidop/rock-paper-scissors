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
const roundWin = document.querySelector('.round-result');

const playerPara = document.createElement('p');
const compPara = document.createElement('p');
const roundPara = document.createElement('p');

buttons.forEach(function(button)
{
    button.addEventListener('click', function(btn)
    {
        choice = btn.target.getAttribute('id');
        playerChoice.appendChild(playerPara);
        playerPara.textContent = `${choice.toUpperCase()}`;

        randomNumber = getComputerChoice(1, 4);
        computerSelection = assignComputerSelection(randomNumber);
        compChoice.appendChild(compPara);
        compPara.textContent = `${computerSelection.toUpperCase()}`;

        roundResult = playRound(computerSelection, choice);

        if (roundResult === 8)
        {
            playerScore++;
            roundWin.appendChild(roundPara);
            roundPara.textContent = 'You win!';
    
        }
        else if (roundResult === 9)
        {
            computerScore++;
            roundWin.appendChild(roundPara);
            roundPara.textContent = 'You Lose!';
        }
        else
        {
            roundWin.appendChild(roundPara);
            roundPara.textContent = 'Tie!';
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
        return 7; 
    }

    if (compChoice === 'rock')
    {
        if (playerChoice === 'paper')
        {
            return 8;
        }
        else if (playerChoice === 'scissors')
        {
            return 9;
        }
    }
    else if (compChoice=== 'paper')
    {
        if (playerChoice === 'rock')
        {
            return 9;
        }
        else if (playerChoice === 'scissors')
        {
            return 8;
        }
    }
    else
    {
        if (playerChoice === 'rock')
        {
            return 8;
        }
        else if (playerChoice === 'paper')
        {
            return 9;
        }
    }
}