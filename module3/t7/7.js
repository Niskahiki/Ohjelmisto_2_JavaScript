'use strict';

document.querySelector('#trigger').addEventListener('mouseover', () => {
    const targetElement = document.querySelector('#target');
    targetElement.src = 'img/picB.jpg';
});

document.querySelector('#trigger').addEventListener('mouseleave', () => {
    const targetElement = document.querySelector('#target');
    targetElement.src = 'img/picA.jpg';
});