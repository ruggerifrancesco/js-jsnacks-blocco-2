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