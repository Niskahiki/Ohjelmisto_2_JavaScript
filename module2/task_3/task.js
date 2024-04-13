'use strict';

const dogNameArray = [];

for (let i = 0; i < 6; i++) {
    const newDogName = prompt(`Give ${i + 1}. dog name`);

    dogNameArray.push(newDogName);
}

let sortedAndReversedDogNameArray = dogNameArray.sort();
sortedAndReversedDogNameArray.reverse();

for (let i = 0; i < dogNameArray.length; i++) {
    const dogNameLiElement = document.createElement('li');

    dogNameLiElement.innerHTML = sortedAndReversedDogNameArray[i];

    document.querySelector('ul').appendChild(dogNameLiElement);
}
