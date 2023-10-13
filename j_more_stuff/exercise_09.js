let num = -0;

const isNegZero = num => {
  if ((1 / num) === -Infinity) {
    return true;
    } else {
      return false;
    }
}

console.log(isNegZero(num));