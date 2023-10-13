let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// function foo does not change the global scope bar - it creates a new bar in the inner scope
// remove the 'let' from the function and it would change bar globally

