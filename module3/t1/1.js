'use strict';

const firstElement = document.createElement('li');
const secondElement = document.createElement('li');
const thirdElement = document.createElement('li');

firstElement.innerHTML = 'First item';
secondElement.innerHTML = 'Second item';
thirdElement.innerHTML = 'Third item';

const ulElement = document.querySelector('#target');
ulElement.classList.add('my-list');

ulElement.appendChild(firstElement);
ulElement.appendChild(secondElement);
ulElement.appendChild(thirdElement);