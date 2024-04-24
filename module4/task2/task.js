'use strict';

document.addEventListener('submit', async (event) => {
    event.preventDefault();

    const queryValue = document.querySelector('#query').value;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${queryValue}`);
        if (!response.ok) throw new Error('Invalid input!');
        const json = await response.json();
        console.log('result', json)
    } catch (error) {
        console.log('error', error);
    }
});