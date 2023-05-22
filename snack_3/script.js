console.log('JS Loaded Successfull!');

// Calcola la somma e la media dei primi 10 numeri.

const numberList = [];
let sum = 0;

for (let i = 1; i <= 10; i++) {
    // All numbers Printed
    numberList.push(i);
    // Sum of the numbers
    sum = sum + i;
}

console.log(`Lista Numeri: ${numberList}`);
console.log(`Somma totale: ${sum}`);
console.log(`Media Numeri: ${sum / 10}`);