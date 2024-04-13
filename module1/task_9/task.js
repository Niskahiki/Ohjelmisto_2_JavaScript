'use strict';

const strClientNumber = prompt('Give a number');

const clientNumber = parseInt(strClientNumber);

if (isNaN(clientNumber)) {
    document.querySelector('#result').innerHTML = 'Given value is not a number';
} else {
    if (0 <= clientNumber && 2 >= clientNumber) {
        document.querySelector('#number').innerHTML = clientNumber;
        document.querySelector('#result').innerHTML = 'Is a prime number';
    } else {
        for (let i = 2; i < clientNumber; i++) {
            if (clientNumber % i === 0) {
                document.querySelector('#number').innerHTML = clientNumber;
                document.querySelector('#result').innerHTML = 'Is not a prime number';
                break;
            } else if (i === clientNumber - 1) {
                document.querySelector('#number').innerHTML = clientNumber;
                document.querySelector('#result').innerHTML = 'Is a prime number';
                break;
            }
        }
    }
}