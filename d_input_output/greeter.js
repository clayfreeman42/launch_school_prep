let rlSync = require('readline-sync');

// exercise 1
// let name = rlSync.question("What's your name?\n");
// console.log(`Hello, ${name}!`);

// exercise 2
let firstName = rlSync.question("What's your first name?\n");
let lastName = rlSync.question("What's your last name?\n");

console.log(`Hello, ${firstName} ${lastName}!`);