let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

let newArray = myArray.forEach(outerNum => {
    outerNum.forEach( innerNum => {
      if ( innerNum % 2 === 0 ) {
        console.log(innerNum);
      }
  })
})

// or - ls for loop

for (let i = 0; i < myArray.length; i += 1) {
  for (let j = 0; j < myArray[i].length; j += 1) {
    let value = myArray[i][j];
    if (value % 2 === 0) {
      console.log(value);
    }
  }
}