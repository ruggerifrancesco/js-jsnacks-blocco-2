console.log('JS LOADED!');

// Crea un array di 10 oggetti che rappresentano un peperone, indicando per ognuno varietà, 
// peso e lunghezza. Calcola quanto pesano tutti i peperoni.

// Bonus:
// crea un peperone con una funzione - DONE
const peppersList = [];

// =>  Console Log tutta lista
for (let i = 0; i < peppersList.length; i++) {
    for (const key in peppersList) {
        console.log(peppersList[key])
    }
}

// Add new Pepper Function Scheme
function addNewPepper(name, variety, weight, length) {
    const pepper = {
        name: name,
        variety: variety,
        weight: weight,
        length: length,
    };

    peppersList.push(pepper);
  }
