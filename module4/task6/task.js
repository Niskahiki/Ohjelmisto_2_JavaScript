'use strict';

function cleareJokesDiv() {
    document.querySelector('#jokes').innerHTML = '';
}

async function fetchJoke(queryValue) {
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${queryValue}`);
        if (!response.ok) throw new Error('Invalid input!');
        const json = await response.json();
        return json;
    } catch (error) {
        return error;
    }
}

function displayJokes(jokes) {

    const jokesDivElement = document.querySelector('#jokes');

    for (let i = 0; i < jokes.length; i++) {
        const newArticleElement = document.createElement('article');

        const pElement = document.createElement('p');
        pElement.textContent = jokes[i].value;
        newArticleElement.appendChild(pElement);

        jokesDivElement.appendChild(newArticleElement);
    }
}

document.addEventListener('submit', async (event) => {
    event.preventDefault();
    cleareJokesDiv();

    const queryValue = document.querySelector('#query').value;

    const jokes = await fetchJoke(queryValue);

    if (jokes instanceof Error) {
        console.log('error', jokes);
    } else {
        displayJokes(jokes.result);
    }
});