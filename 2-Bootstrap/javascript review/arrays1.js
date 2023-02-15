let myArr = [4, 5 ,6, 7, 3, 3];
let myArr2 = [6, "a", true, -2];

console.log(myArr);
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[4]);
console.log(myArr.length);
console.log(myArr[myArr.length - 1]);

console.log(myArr.indexOf(7));
console.log(myArr.indexOf(8));
console.log(myArr.indexOf(3));

console.log(myArr.includes(4));
console.log(myArr.includes(14));

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3);

let arr3ToString = arr3.join(", ");
console.log(arr3ToString);

