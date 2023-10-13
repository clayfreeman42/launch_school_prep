let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;


for (let key in myObj) {
  console.log(key);
}  

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

// for/in iterates over all the keys, including those from the parent. Object.keys only iterates the myObj keys

// to limit for/in to myObj keys

for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}