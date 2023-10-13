let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// line three is an assignment operator when it should have been
// a === equality test. The loop is always set to 1.