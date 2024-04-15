'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const selectElement = document.querySelector('#target');

for (let i = 0; i < students.length; i++) {
  const newOptionElement = document.createElement('option');
  newOptionElement.value = students[i].id;
  newOptionElement.textContent = students[i].name;

  selectElement.appendChild(newOptionElement);
}