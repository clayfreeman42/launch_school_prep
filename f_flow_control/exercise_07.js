let upperCaseIfLong = (text) => {
  if (text.length >= 10) {
    return text.toUpperCase();
  } else {
    return text;
  }
}

upperCaseIfLong('Hello Universe!');