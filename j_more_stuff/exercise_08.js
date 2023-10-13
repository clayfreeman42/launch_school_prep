const isNotANumber = num => {
  if (num !== num) {
    return true;
  } else {
    return false;
  }
}

console.log(isNotANumber(NaN));
