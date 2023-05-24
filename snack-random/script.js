// count = numero di elementi nell array

function randomArray (count, max, min) {
    const array = [];
    while (array.length < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
      if (array.indexOf(randomNumber) == -1) {
        array.push(randomNumber);
      }
    }
    return array;
  }
  
  console.log(randomArray(3, 0, 4));