'use strict';

document.querySelector('#start').addEventListener('click', () => {
    const selectElement = document.querySelector('#operation');
    const operation = selectElement.value;

    const num1Element = document.querySelector('#num1');
    const num2Element = document.querySelector('#num2');

    const value1 = parseInt(num1Element.value);
    const value2 = parseInt(num2Element.value);

    const resultElement = document.querySelector('#result');
    switch (operation) {
        case ('add'):
            resultElement.innerHTML = value1 + value2;
            break;
        case ('sub'):
            resultElement.innerHTML = value1 - value2;
            break;
        case ('multi'):
            resultElement.innerHTML = value1 * value2;
            break;
        case ('div'):
            resultElement.innerHTML = value1 / value2;
            break;
    }
});