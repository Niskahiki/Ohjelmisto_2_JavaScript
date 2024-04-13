'use strict';

const strClientCountOfDice = prompt('Give number of dice.');
const strClientWantedNumber = prompt('Give the number of interest.');

const clientCountOfDice = parseInt(strClientCountOfDice);
const clientWantedNumber = parseInt(strClientWantedNumber);

const resultElement = document.querySelector('p');

if (isNaN(clientCountOfDice)) {
    resultElement.textContent = 'Given value to count of dice must be in numbers';
} else if (isNaN(clientWantedNumber)) {
    resultElement.textContent = 'Given value as interest must be in numbers';
} else {
    let timesBeingAsInterest = 0;

    for (let i = 0; i < 10_000; i++) {
        let currentSum = 0;
        for (let j = 0; j < clientCountOfDice; j++) {
            currentSum += Math.ceil(Math.random() * 6);
        }

        if (currentSum === clientWantedNumber) {
            timesBeingAsInterest++;
        }

    }

    const possibility = (timesBeingAsInterest / 10_000) * 100;

    resultElement.textContent = `Probability to get sum ${clientWantedNumber} with ${clientCountOfDice} dice is ${possibility.toFixed()}%`;
}