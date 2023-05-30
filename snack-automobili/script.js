console.log('JS LOADED!');

/*

Crea un array composto da 15 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: 

nel primo array solo le auto a benzina,  // ciclo for 
nel secondo solo le auto a diesel,  // ciclo foreach
nel terzo il resto delle auto.  //array.filter

Infine stampa separatamente i 3 array.

*/

const carModule = (brand, model, poweredBy) => {
    return {
        Marca: brand,
        Modello: model,
        Alimentazione: poweredBy,
    }
}

const carsList = [
    carModule('Toyota', 'Camry', 'benzina'),
    carModule('Honda', 'Civic', 'electric'),
    carModule('Ford', 'Mustang', 'benzina'),
    carModule('Volkswagen', 'Golf', 'diesel'),
    carModule('Tesla', 'Model S', 'electric'),
    carModule('Fiat', 'Punto', 'LPG'),
    carModule('BMW', 'X5', 'benzina'),
    carModule('Mercedes', 'C-Class', 'diesel'),
    carModule('Audi', 'A4', 'benzina'),
    carModule('Chevrolet', 'Cruze', 'benzina'),
    carModule('Hyundai', 'Elantra', 'electric'),
    carModule('Nissan', 'Sentra', 'benzina'),
    carModule('Kia', 'Sportage', 'benzina'),
    carModule('Mazda', 'CX-5', 'diesel'),
    carModule('Subaru', 'Impreza', 'benzina')
];

// To print all objects into a list in console.log
// carsList.forEach(car => {
    // const keys = Object.keys(car);
    // keys.forEach(key => console.log(key + ": " + car[key]));
    // console.log("--------------");
//   });

const petrolCars = carsList.filter(car => car.Alimentazione === 'benzina');
petrolCars.forEach(car => {
    const keys = Object.keys(car);
    keys.forEach(key => console.log(key + ": " + car[key]));
    console.log("--------------");
});

const dieselCars = [];
const otherCars = [];

