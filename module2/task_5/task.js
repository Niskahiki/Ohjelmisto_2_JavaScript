'use strict';

const numberArray = [];
while (true) {
    const strClientNumber = prompt('Give a number.');

    const clientNumber = parseInt(strClientNumber);

    if (!isNaN(clientNumber)) {
        if (numberArray.includes(clientNumber)) { // If number array contains already the given number
            break;
        } else {
            numberArray.push(clientNumber);
        }
    }
}

const sortedNumberArray = numberArray.sort((a, b) => a - b);
for (let i = 0; i < numberArray.length; i++) {
    console.log(sortedNumberArray[i]);
}