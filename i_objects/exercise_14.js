function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();


// Variables: hello, greeting, name, xyzzy, howdy, foo

// Objects: hello, xyzzy, [3, 4, 5],{}, howdy, foo = - missed the outter object { a: 1, b: 2, c: [3, 4, 5], d: {} }

// Object properties: a, b, c, d   - missed array indexes

// Primitives: greeting, name, 1, 2, 3, 4, 5 - oops - missed primitive values instead of names:
    // ' ', 1, 2, 3, 4, 5, 'Hi', and 'Grace', 'a', 'b', 'c', and 'd' in the list and 0, 1, and 2 for the array indexes of [3, 4, 5]