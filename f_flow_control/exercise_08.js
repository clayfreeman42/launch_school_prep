let numberRanger = (num) => {
  switch (true) {
    case num >= 0 && num <= 50:
      console.log(`${num} is beteween 0 and 50`);
      break;
    case num >= 51 && num <= 100:
      console.log(`${num} is beteween 51 and 100`);
      break;
    case num > 100:
      console.log(`${num} is greater than 100`);
      break;
    case num < 0:
      console.log(`${num} is less than 0`);
      break;
    default:
      console.log('I don\'t think that was a number');
      break;
  }
}

numberRanger(79);