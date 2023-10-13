let rlSync = require('readline-sync');

let multiply = () => {
  let firstNum = parseFloat(rlSync.question("Enter the first number: "));
  let secondNum = parseFloat(rlSync.question("Enter the second number: "));
  return console.log(firstNum + ' * ' + secondNum + ' = ' + (firstNum * secondNum));
}

multiply();

// LS version:

// function multiply(left, right) {
//   return left * right;
// }

// function getNumber(prompt) {
//   let readlineSync = require('readline-sync');
//   return parseFloat(readlineSync.question(prompt));
// }

// let left = getNumber('Enter the first number: ');
// let right = getNumber('Enter the second number: ');
// console.log(`${left} * ${right} = ${multiply(left, right)}`);