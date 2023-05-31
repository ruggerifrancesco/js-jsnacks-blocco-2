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

console.log('Array Originale:', arrayQuack);

/**
 * Function to capitalize first letter, and lowercase the rest
 * 
 * @param arr - The name of the array you want to return
 * @param firstLetter - The first letter of the word, based on the array.lenght is 0
 * @param rest - The rest of the letters in the array to be lowercased
 */
function capitalizeWords(array) {
    return array.map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const rest = word.slice(1).toLowerCase();
  
      return firstLetter + rest;
    });
  }

console.log('Array Dopo:', capitalizeWords(arrayQuack));

// Bonus Quack
const arrayQuack2 = [...array];

function capitalizeWordsViceversa(array) {
    return array.map(word => {
      let output = '';
      for (let i = 0, len = word.length; i < len; i++) {
        const character = word[i];
        if (character === character.toLowerCase()) {
          // The character is lowercase
          output += character.toUpperCase();
        } else {
          // The character is uppercase
          output += character.toLowerCase();
        }
      }
      return output;
    });
  }

  console.log('Array2:', capitalizeWordsViceversa(arrayQuack2));
