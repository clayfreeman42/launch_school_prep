let result;

let reverseString = (input) => {
  // what is the base case
  if (input === "") return "-";
  // what is the smallest work that can be done per iteration
  console.log(input);
  result = reverseString(input.substring(1)) + input.charAt(0);
  console.log(result);
  return result;
  // substring removes the first character
  // + charAt adds first char to the end of the string
}
// once the last letter is removed by substring, the stack unwinds
// returning the input.charAt value)
reverseString('hello');

// stopping condition / base case
// continue recursive call and do some work until the stopping
// condition is reached

// memoization?? - caching results of expensive function calls and 
// returning them when the same input is encountered again

// recursion works well with recursively designed data structures:
// - JSON, trees, graphs - things that allow you to focus on one tiny bit 
// of the data structure at a time

