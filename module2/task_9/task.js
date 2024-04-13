'use strict';

function even(numberArray) {
    const evenArray = [];

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] % 2 === 0) {
            evenArray.push(numberArray[i]);
        }
    }

    return evenArray;
}


const numberArray = [3, 6, 9, 7, 2, 1];

const evenArray = even(numberArray);

console.log('Original array', numberArray);
console.log('Even array', evenArray);