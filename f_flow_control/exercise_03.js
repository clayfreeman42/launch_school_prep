const evenOrOdd = (num) => {
  // check if integer
  if (!Number.isInteger(num)) {
    console.log('Number is not an integer');
    return;
  }

  // check if even or odd
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(23.2);