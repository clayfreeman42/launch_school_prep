// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];

// let newArray = myArray.map(num => {
//   if (num % 2 === 0) {
//     return `${num} - even`;
//   } else {
//     return `${num} - odd`;
//   }
// })

// console.log(newArray);

// over did it by adding the array element to the string

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArray = myArray.map(num => {
  if (num % 2 === 0) {
    return `even`;
  } else {
    return `odd`;
  }
})

console.log(newArray);