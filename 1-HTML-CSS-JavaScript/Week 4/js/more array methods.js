const primaryColorsArr = ['red', 'blue', 'yellow'];
const secondaryColorsArr = ['purple', 'green', 'orange'];
const colorsArr = primaryColorsArr.concat(secondaryColorsArr);
console.log(colorsArr);

// Sorting
console.log(colorsArr.sort());

// Slicing
const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let slicedArr = testArr.slice(2, 5);
console.log(slicedArr);

// Splicing to insert
// Array.splice(atIndex, 0, item)
const testArr2 = ['a', 'b', 'c', 'd']
testArr2.splice(2, 0, 'x');
console.log(testArr2);

// Splicing to remove
const testArr3 = ['a', 'b', 'c', 'd', 'e', 'f'];
testArr3.splice(1, 3);
console.log(testArr3);

// Splicing to replace
const testArr4 = ['a', 'b', 'c', 'd', 'e', 'f'];
const replacedArr = testArr4.splice(1, 3, 'uno');
console.log(replacedArr);
console.log(testArr4);

// more slicing

const menu = ['gyro', 'sandwich', 'burger', 'taco', 'pasta'];
menu.splice(1, 3);
console.log(menu);