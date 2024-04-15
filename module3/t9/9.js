'use strict';

document.querySelector('#start').addEventListener('click', () => {
    const calculationElement = document.querySelector('#calculation');

    const calculation = calculationElement.value;

    const resultElement = document.querySelector('#result');
    if (calculation.includes('+')) {
        const calculationValues = calculation.split('+');

        const value1 = parseInt(calculationValues[0]);
        const value2 = parseInt(calculationValues[1]);

        resultElement.innerHTML = value1 + value2;
    } else if (calculation.includes('-')) {
        const calculationValues = calculation.split('-');

        const value1 = parseInt(calculationValues[0]);
        const value2 = parseInt(calculationValues[1]);

        resultElement.innerHTML = value1 - value2;
    } else if (calculation.includes('*')) {
        const calculationValues = calculation.split('*');

        const value1 = parseInt(calculationValues[0]);
        const value2 = parseInt(calculationValues[1]);

        resultElement.innerHTML = value1 * value2;
    } else if (calculation.includes('/')) {
        const calculationValues = calculation.split('/');

        const value1 = parseInt(calculationValues[0]);
        const value2 = parseInt(calculationValues[1]);

        resultElement.innerHTML = value1 / value2;
    } else {
        resultElement.innerHTML = 'Invalid calculation';
    }
});