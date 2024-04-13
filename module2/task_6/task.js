function rollDice() {
    return Math.ceil(Math.random() * 6);
}

while (true) {
    const liElement = document.createElement('li');
    const diceNumber = rollDice();
    liElement.innerHTML = diceNumber;

    document.querySelector('ul').appendChild(liElement);

    if (diceNumber === 6) {
        break;
    }
}