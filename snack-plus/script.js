console.log('JS Loaded Successfull!');

/**
 * 
 * Generare una lista usando una funzione:
 * nell'html ci dovrà essere esclusivamente un elemento ul parent,
 * attraverso una funzione creiamo un singolo elemento html di tipo li
 * poi ne aggiungiamo una decina all'ul, sempre via js.
 * 
 * BONUS:
 * Se clicchiamo sul li il suo testo verrà sbarrato.
 */

const listContent = [
    'Banane',
    'Cipolle',
    'Carote',
    'Carbonara'
]

function createElement (tagName, className) {
    const cellElement = document.createElement(tagName);
    cellElement.className += className;
    return cellElement;
}

function markItem(event) {
    const listItem = event.target;
    listItem.classList.toggle('completed');
}

const listElement = document.getElementById('listContainer');

let i = 0;
while (i < listContent.length) {
    const actualListItem = createElement('li');
    actualListItem.textContent = listContent[i];

    actualListItem.addEventListener('click', markItem);

    listElement.appendChild(actualListItem);
    i++;
}