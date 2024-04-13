'use strict';

const strClientNumberOfParticipants = prompt('Give number of participants');

const clientNumberOfParticipants = parseInt(strClientNumberOfParticipants);

if (isNaN(clientNumberOfParticipants)) {
    alert('The value of participants must be in numbers.');
} else {
    const participantsArray = [];

    for (let i = 0; i < clientNumberOfParticipants; i++) {
        const newName = prompt(`Enter ${i + 1}. participant name.`);
        participantsArray.push(newName);
    }

    const sortedParticipantsArray = participantsArray.sort();


    for (let i = 0; i < participantsArray.length; i++) {
        const nameLiElement = document.createElement('li');

        nameLiElement.innerHTML = sortedParticipantsArray[i];

        document.querySelector('ol').appendChild(nameLiElement);
    }
}