console.log('JS Loaded Successfull!');

/*
Dare la possibilità di inserire due parole.
Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.
*/

const firstWordToCheck = prompt("Sceglio la prima parola");
const secondWordToCheck = prompt("Sceglio la seconda parola");

findLengthWords(firstWordToCheck, secondWordToCheck);

/**
 * 
 * @param firstWord the lenght of the firstWord insert from the user
 * @param secondWord the lenght of the secondWord insert from the user
 * @returns 1 = true, 0 = false
 */
function findLengthWords (firstWord, secondWord) {

    if (firstWord.length === secondWord.length) {
        console.log(`${firstWord}, ${secondWord}`);
        return 1;
    } else if (firstWord.length > secondWord.length) {
        console.log(`Parola piu lunga: ${firstWord}, totale: ${firstWord.length}`);
        return 0;
    } else {
        console.log(`Parola piu lunga: ${secondWord}, totale: ${secondWord.length}`);
        return 0;
    }

}

