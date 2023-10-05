let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// bar will be sent to the log as it was declared in global scope
// and the new foo was in block scope
// without the second let, it would have logged qux