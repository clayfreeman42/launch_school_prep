let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keyArr = Object.keys(obj);

let upperKeyArr = keyArr.map(key => key.toUpperCase())

console.log(upperKeyArr);