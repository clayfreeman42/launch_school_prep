let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }


let copyObj = (source, keys) => {
  sourceEntries = Object.entries(source);
  let newObject = {};
  if (keys === undefined) {
    for (let i = 0; i < sourceEntries.length; i++) {
      let key = sourceEntries[i][0];
      let value = sourceEntries[i][1];
      newObject[key] = value;
    }
  } else {
    for (let i = 0; i < keys.length; i++) {
      for ( let counter = 0; counter < sourceEntries.length; counter++) {
        if (keys[i] === sourceEntries[counter][0] ) {
          let key = sourceEntries[counter][0]
          console.log(key);
          let value = sourceEntries[counter][1]
          newObject[key] = value;
        }
      }
    }
  }  
  return newObject;
}



// let test = copyObj(objToCopy);
// console.log(test);

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }


// ls solution - it looks like this solution fails if you pass a key that doesn't
// exist in the source object


// function copyObj(sourceObject, keys) {
//   let destinationObject = {};

//   if (keys) {
//     keys.forEach(function(key) {
//       destinationObject[key] = sourceObject[key];
//     });

//     return destinationObject;
//   } else {
//     return Object.assign(destinationObject, sourceObject);
//   }
// }
