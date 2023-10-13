let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = arr => {
  return arr.map(element => element.length )
  .filter(element => element % 2 !== 0)
};

// gratuitous test of method chaining

console.log(oddLengths(arr)); // => [1, 5, 3]