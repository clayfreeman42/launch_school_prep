let rlSync = require('readline-sync');

// functions - exercise 2

let greeter = () => {
  let firstName = rlSync.question("What's your first name?\n");
  let lastName = rlSync.question("What's your last name?\n");
  console.log(`Hello, ${firstName} ${lastName}!`);
}

greeter();

