const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// it will not produce an error as a new constant is declared over the existing one
// by using the const in the block scope
// after the block, the original variable is active again
