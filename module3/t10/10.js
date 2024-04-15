'use strict';

document.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstname = document.querySelector('input[name=firstname]').value;
    const lastname = document.querySelector('input[name=lastname]').value;

    const targetElement = document.querySelector('#target');

    targetElement.innerHTML = `Your name is ${firstname} ${lastname}`;
});