'use strict';

const strNum1 = prompt('Give number 1.');
const strMum2 = prompt('Give number 2.');
const strNum3 = prompt('Give number 3.');

const num1 = parseInt(strNum1);
const num2 = parseInt(strMum2);
const num3 = parseInt(strNum3);

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const avarage = sum / 3;

document.querySelector('#sum').innerHTML = `Sum: ${sum}`;
document.querySelector('#product').innerHTML = `Product: ${product}`;
document.querySelector('#avarage').innerHTML = `Avarage: ${avarage}`;