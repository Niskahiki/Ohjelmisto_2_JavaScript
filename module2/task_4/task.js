'use strict';

const numberArray = [];
while (true) {
    const strClientNumber = prompt('Give a number. 0 = stop.');

    const clientNumber = parseInt(strClientNumber);

    if (clientNumber === 0) {
        break;
    } else if (!isNaN(clientNumber)) {
        numberArray.push(clientNumber);
    }
}

const sortedNumberArray = numberArray.sort((a, b) => b - a);

for (let i = 0; i < numberArray.length; i++) {
    console.log(sortedNumberArray[i]);
}