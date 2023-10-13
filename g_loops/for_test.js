let myArr = ['Oslo', 'Angel', 'Chivi', 'Fido'];

let newArr = [];

for (let i = 0; i < myArr.length; i++) {

  if (myArr[i] === 'Oslo') {
    continue;
  }
  let upperName = myArr[i].toUpperCase();
  newArr.push(upperName);
}

console.log(newArr);