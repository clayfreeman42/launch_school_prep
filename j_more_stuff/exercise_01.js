let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// 1, 4, 3 - array1 and array2 both point to the same array - copy by reference