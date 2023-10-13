let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

let allMatches = (words, regExExp) => words.filter(word => word.match(regExExp));

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']