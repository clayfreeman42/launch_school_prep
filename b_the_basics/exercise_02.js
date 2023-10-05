let num = 4936;

let ones = num % 10;
let tensRemainder = num % 100;
let hundredsRemainder = num % 1000 ;
let thousandsRemainder = num % 10000 ;

let tens = (tensRemainder - ones) / 10;
let hundreds = (hundredsRemainder - tensRemainder) / 100;
let thousands = (thousandsRemainder - hundredsRemainder) / 1000;

console.log(thousands);
console.log(hundreds)
console.log(tens);
console.log(ones);

// launch school solution
// progressively strip digits
//
// let ones = number % 10;
// 
// number = (number - ones) / 10; // returns 493
// 
// let tens = number % 10; // returns 3
//
// number = (number - tens) / 10; // returns 49
// 
// let hundreds = number % 10; // returns 9
// 
// let thousands = (number - hundreds) / 10 // returns 4