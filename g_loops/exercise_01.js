let rlSync = require('readline-sync');

let age = Number(rlSync.question("What's your age?\n"));
let ageIncrement = 10;

console.log(`You are ${age} years old`);

for(let counter = 10; counter <= 40; counter += ageIncrement) {
  console.log(`In ${counter} years, you will be ${age + counter} years old.`);
}