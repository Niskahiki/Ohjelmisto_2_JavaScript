'use strict';

const clientName = prompt('What`s your name?');

const number = Math.ceil(Math.random() * 4);

let room;

switch (number) {
    case 1:
        room = 'Gryffindor';
        break;
    case 2:
        room = 'Slytherin';
        break;
    case 3:
        room = 'Hufflepuff';
        break;
    case 4:
        room = 'Ravenclaw';
        break
    default:
        room = '';
}

document.querySelector('p').innerHTML = `${clientName}, you are ${room}.`;
