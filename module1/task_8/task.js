'use strict';

const strStartYear = prompt('Give start year.');
const strEndYear = prompt('Give end year');

const startYear = parseInt(strStartYear);
const endYear = parseInt(strEndYear);

if (startYear == 'Nan') {
    alert("Start year needs to be in numbers.");
} else if (endYear == 'Nan') {
    alert("End year needs to be in numbers");
} else {
    for (let year = startYear; year <= endYear; year++) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                const yearLiElement = document.createElement('li');
                yearLiElement.innerHTML = year;
                document.querySelector('ul').appendChild(yearLiElement);
            }
        } else if (year % 4 === 0) {
            const yearLiElement = document.createElement('li');
            yearLiElement.innerHTML = year;
            document.querySelector('ul').appendChild(yearLiElement);
        }
    }
}