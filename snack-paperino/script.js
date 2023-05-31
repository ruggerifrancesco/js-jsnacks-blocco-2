console.log('JS LOADED')

/**
 *
 *
 *
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'PapERino'] => ['Pippo', 'Pluto', 'Paperino']

 */

const array = ['pippo', 'PLUTO', 'PapERino'];

const arrayQuack = [...array];

console.log('Array Prima:', arrayQuack);

/**
 * Function to capitalize first letter, and lowercase the rest
 * 
 * @param arr - The name of the array you want to return
 * @param firstLetter - The first letter of the word, based on the array.lenght is 0
 * @param rest - The rest of the letters in the array to be lowercased
 */
function capitalizeWords(arr) {
    return arr.map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const rest = word.slice(1).toLowerCase();
  
      return firstLetter + rest;
    });
  }

console.log('Array Dopo:', capitalizeWords(arrayQuack));