let output;

let factorial = (num) => {
  if (num >= 1) {
    return num * factorial(num - 1);
  } else if (num === 0) {
    return 1;
  } else {
    return 'Enter a positive number.';
  }
}

console.log(factorial(5));