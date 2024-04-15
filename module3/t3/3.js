'use strict';
const names = ['John', 'Paul', 'Jones'];

const ulElement = document.querySelector('#target');

for (let i = 0; i < names.length; i++) {
    const newElement = document.createElement('li');
    newElement.innerHTML = names[i];

    ulElement.appendChild(newElement);
}