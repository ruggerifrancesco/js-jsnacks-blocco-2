console.log('JS LOADED!')

// Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
//     Codice giocatore - DONE
//     Nome - DONE
//     Cognome - DONE
//     Età - DONE
//     Media punti fatti per partita - DONE
//     Percentuale di successo per tiri da 3 punti - DONE
//     Stoppate - DONE
//     Tiri - DONE

// Generare casualmente le statistiche di gioco, secondo queste regole:
//     il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
//     la media punti fatti per partita deve essere compresa tra 0 e 50
//     la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
//     le stoppate sono un numero intero compresot ra 0 e 30
//     i tiri sono un numero intero compreso tra 20 e 100

// => Lista Giocatori
const playerObject = [
    createNewPlayer(
        'John', 
        'Constantine', 
        52, 
        generatePlayerCode(), 
        0, 
        0, 
        0,
        0
    )
]

// =>  Console Lot tutti giocatori
for (let i = 0; i < playerObject.length; i++) {
    for (const key in playerObject) {
        console.log(playerObject[key])
    }
}

// => Codice Giocatore Random
    function generatePlayerCode() {
      const codeComponents = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let codeUser = '';
      for (let i = 0; i < 5; i++) {
        const randomPicker = Math.floor(Math.random() * codeComponents.length);
        codeUser += codeComponents.charAt(randomPicker);
      }
      return codeUser;
    }


// Generate new Player Object
    function createNewPlayer(name, surname, age, playerCode, averagePoints, percentageSuccess, blockedShot, shoots) {
        return {
            name: name,
            surname: surname,
            age: age,
            'Player code:': playerCode,
            average_points: averagePoints,
            percentage_success: percentageSuccess,
            blocked_shot: blockedShot,
            shoot: shoots
        };
      }
  