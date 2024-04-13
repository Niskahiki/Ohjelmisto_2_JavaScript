'use strict';

const numberArray = []
for (let i = 0; i < 5; i++) {
    const strClientNumber = prompt(`Enter ${i + 1}. number`);

    const clientNumber = parseInt(strClientNumber);

    numberArray.push(clientNumber);
}

for (let i = numberArray.length; i >= 0; i--) {
    console.log(numberArray[i]);
}