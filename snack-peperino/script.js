console.log('JS LOADED!');

// Crea un array di 10 oggetti che rappresentano un peperone, indicando per ognuno varietà, 
// peso e lunghezza. Calcola quanto pesano tutti i peperoni.

// Bonus:
// crea un peperone con una funzione - DONE

const peppersList = [];
let totalPeppersWeight = 0;

addNewPepper('Caroline Repaer', 'Variety 1', 100, 5);
addNewPepper('Caroline Repaer', 'Variety 2', 120, 6);
addNewPepper('Ghost Pepper', 'Variety 1', 90, 4);

// => Add new Pepper Function Scheme
function addNewPepper(name, variety, weight, length) {
    const pepper = {
        name: name,
        variety: variety,
        weight: weight,
        length: length,
    };

    peppersList.push(pepper);
  }

// => Console Log Array
console.log(peppersList);
for (let i = 0; i< peppersList.length; i++) {
    totalPeppersWeight += peppersList[i].weight;
}