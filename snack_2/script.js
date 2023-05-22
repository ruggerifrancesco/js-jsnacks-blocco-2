console.log('JS Loaded Successfull!');


// Generare numero casuale tra 1 e 100 COMPRESI. Continuare a chiedere all'utente di indovinare il numero fino a quando non lo indovina.
// Ogni volta che sbaglia stampiamo in console un messaggio che gli/le dice se il numero da indovinare è maggiore o minore.
// Una volta che ha indovinato, stampiamo in console il numero di tentativi totali.

// Gneratore Randomico
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let userNumber = parseInt(prompt(`Tentativo: ${guesses} | Scegli un numero!`));
// Numero Tentativi, inzio 1
let guesses = 1;


// Verificare che il valore non sia uguale al valore della variabile
while (userNumber != randomNumber) {

    if (randomNumber > userNumber) {
        console.log('Troppo Basso');
    } else if (randomNumber < userNumber) {
        console.log('Troppo Alto');
    } else {
        console.log ('Non e un numero');
    }

    userNumber = parseInt(prompt(`Tentativo: ${guesses} | Scegli un numero!`));
    guesses++
}

console.log(`Complimenti, hai indovinato il numero! Totale tentativi: ${guesses}`);