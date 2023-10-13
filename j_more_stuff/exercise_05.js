function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// splits the string at each space to form an array, reverses the array
// then converts each element in the array to a length