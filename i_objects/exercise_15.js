function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');



// variables: bar, arg1, arg2, , foo, qux, result



// object property names: abc, def, ghi, jkl, mno, pqr, array( 0-3, 0-2)




// primitive values: 'Hello', 1, 2, 3, 4, 5, 6, null, NaN, 'Victor', 'Antonina'
// Missed: Since property names are strings in most cases, and strings are primitive values, 
// we should also include 'abc', 'def', 'ghi', 'jkl'. 'mno', 'pqr', '0', '1', '2', and '3'.

// objects: bar, qux, {abc: [1, 2, 3, [4, 5, 6]], def: null, ghi: NaN, jkl: foo, 
// mno: arg1, pqr: arg2,}, [1, 2, 3, [4, 5, 6]], [4, 5, 6] 