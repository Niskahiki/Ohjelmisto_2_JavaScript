'use strict';

function rollDice(numberOfSides) {
    return Math.ceil(Math.random() * numberOfSides);
}

const strNumberOfSides = prompt('Give number of dice sides');

const numberOfSides = parseInt(strNumberOfSides);

if (isNaN(numberOfSides)) {
    alert('Number of dice sides, must be given as number.');
} else {
    while (true) {
        const liElement = document.createElement('li');
        const diceNumber = rollDice(numberOfSides);
        liElement.innerHTML = diceNumber;

        document.querySelector('ul').appendChild(liElement);

        if (diceNumber === numberOfSides) {
            break;
        }
    }
}