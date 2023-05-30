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
    carModule('Toyota', 'Camry', 'petrol'),
    carModule('Honda', 'Civic', 'electric'),
    carModule('Ford', 'Mustang', 'petrol'),
    carModule('Volkswagen', 'Golf', 'diesel'),
    carModule('Tesla', 'Model S', 'electric'),
    carModule('Fiat', 'Punto', 'LPG'),
    carModule('BMW', 'X5', 'petrol'),
    carModule('Mercedes', 'C-Class', 'diesel'),
    carModule('Audi', 'A4', 'petrol'),
    carModule('Chevrolet', 'Cruze', 'petrol'),
    carModule('Hyundai', 'Elantra', 'electric'),
    carModule('Nissan', 'Sentra', 'petrol'),
    carModule('Kia', 'Sportage', 'petrol'),
    carModule('Mazda', 'CX-5', 'diesel'),
    carModule('Subaru', 'Impreza', 'petrol')
];

console.log(carsList);