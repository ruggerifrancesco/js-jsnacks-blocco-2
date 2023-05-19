console.log('JS Loaded Successfull!');

const array = [];
let sum = 0;

// Ciclo While
while (sum < 50) {
    let userInput = parseInt(prompt("Inserisci un numero"));
    array.push(userInput);
    sum += userInput;

    console.log("La somma degli elementi è maggiore o uguale a 50.");
    console.log(array);
}