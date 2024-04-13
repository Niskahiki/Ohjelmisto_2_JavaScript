'use strict';

function concat(arrayOfStrings) {
    let concatedArray = '';

    for (let i = 0; i < arrayOfStrings.length; i++) {
        concatedArray += arrayOfStrings[i];
    }

    return concatedArray;
}

const arrayOfNames = ['Johnny', 'DeeDee', 'Joye', 'Marky'];

document.querySelector('p').innerHTML = concat(arrayOfNames);