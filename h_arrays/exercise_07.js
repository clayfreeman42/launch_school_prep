let sumOfSquares = function(arr) {
  return arr.reduce((accumulator, num) => {
    return accumulator + num * num;
  }, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83