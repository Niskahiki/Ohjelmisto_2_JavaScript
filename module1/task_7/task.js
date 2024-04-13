'use strict';

const strUserNumber = prompt('Give the count of dice rolls:');

const userNumber = parseInt(strUserNumber);

let resultPElement = document.querySelector('p');

if (userNumber == 'Nan') {
    resultPElement.textContent = 'Given value was not a number.';
} else {
    let sum = 0;

    for (let i = 0; i < userNumber; i++) {
        const diceValue = Math.ceil(Math.random() * 6);
        sum += diceValue;
    }

    resultPElement.textContent = `The result of the dice: ${sum}`;
}