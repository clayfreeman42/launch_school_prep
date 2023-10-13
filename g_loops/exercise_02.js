
let fac = (num) => {
  if (num === 0) {
    return 1;
  } else if (num >= 1) {  
    for (counter = num; counter > 1; counter -= 1) {
        num *= (counter - 1);
      }
    return num;
  } else {
    return 'Please enter a 0 or a positive integer.'
  }
}

console.log(fac(5));