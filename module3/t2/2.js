'use strict';

const firstElement = document.createElement('li');
const secondElement = document.createElement('li');
const thirdElement = document.createElement('li');

firstElement.innerHTML = 'First item';
secondElement.innerHTML = 'Second item';
thirdElement.innerHTML = 'Third item';

const ulElement = document.querySelector('#target');

ulElement.appendChild(firstElement);
ulElement.appendChild(secondElement);
ulElement.appendChild(thirdElement);

secondElement.classList.add('my-item');
