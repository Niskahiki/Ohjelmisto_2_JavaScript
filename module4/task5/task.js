'use strict';

async function fetchJoke() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const json = await response.json();
        console.log(json.value);
    } catch (error) {
        console.log('error', error);
    }
}

fetchJoke();