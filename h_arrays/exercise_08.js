
let oddLengths1 = arr => {
  arrLengths = [];
  
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].length % 2 === 1) {
      arrLengths.push(arr[i].length);
    }
  }

  return arrLengths;
}

let oddLengths2 = arr => {
  let accArr = [];
  return arr.reduce((accumulator, element, i) => {
    if (element.length % 2 === 1) {
      accArr.push(element.length);
    }
    return accArr;
  }, 0)
}

// ls solution
function oddLengths3(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

// the current index as [] sets filteredNumbersArray to an array?!
// On further research, I think currentIndex can be used to set the initial value
// of the accumlator. LS set it to an array, which allowed push to be used on it.
// NOT OBVIOUS!!!



let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

console.log(oddLengths3(arr)); // => [1, 5, 3]