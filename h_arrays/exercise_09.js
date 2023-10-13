


let checkFor3 = arr => {
  let threeCheck;
  arr.forEach(num => {
    if (num === 3) {
      threeCheck = true;
    } else if (num !== 3 && threeCheck !== true) {
      threeCheck = false;
    }
  })
  if (threeCheck === undefined) {
    threeCheck = false;
  }
  return threeCheck;
}




let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];


console.log(checkFor3(numbers1));
console.log(checkFor3(numbers2));
console.log(checkFor3(numbers3));


// I did that one the hard way - forgot about .includes!

console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));