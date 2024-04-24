'use strict';

function clearResultsDiv() {
    document.querySelector('#results').innerHTML = '';
}

async function fetchShows(query) {
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        if (!response.ok) throw new Error('Invalid input!');
        const json = await response.json();
        return json;
    } catch (error) {
        return error;
    }
}

function displayShows(tvShows) {
    const resultsDivElement = document.querySelector('#results');

    for (let i = 0; i < tvShows.length; i++) {
        const newArticleElement = document.createElement('article');

        const h2Element = document.createElement('h2');
        h2Element.textContent = tvShows[i].show.name;
        newArticleElement.appendChild(h2Element);

        const linkElement = document.createElement('a');
        linkElement.textContent = tvShows[i].show.url;
        linkElement.target = '_blank';
        newArticleElement.appendChild(linkElement);

        const imgElement = document.createElement('img');
        imgElement.src = tvShows[i].show.image?.medium;
        imgElement.alt = tvShows[i].show.name;
        newArticleElement.appendChild(imgElement);

        const summaryDivElement = document.createElement('div');
        summaryDivElement.innerHTML = tvShows[i].show.summary;
        newArticleElement.appendChild(summaryDivElement);


        resultsDivElement.appendChild(newArticleElement);
    }
}

document.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearResultsDiv();

    const queryValue = document.querySelector('#query').value;

    const shows = await fetchShows(queryValue);
    if (shows instanceof Error) {
        console.log('error:', shows);
    } else {
        displayShows(shows);
    }
});