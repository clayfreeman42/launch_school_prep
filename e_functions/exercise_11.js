function multiply(left, right) {  // multiply -g, left - l, right - l
  let product = left * right;     // product - l, left, right
  return product;                 // product - l
}

function getNumber(prompt) {      // getNumbers - g, prompt - l
  return parseFloat(question(prompt));  // parseFlot - g, question - g, prompt - l
}

let left = getNumber('Enter the first number: ');   // left - g, getNumber - g
let right = getNumber('Enter the second number: '); // right - g, getNumber - g
console.log(`${left} * ${right} = ${multiply(left, right)}`); // console - g, left - g, right - g, multiply - g

Left and right defined in the function are local as they are defined by function parameters

let left and let right declare global variables

- since the scopes are different, the variables are not the same 