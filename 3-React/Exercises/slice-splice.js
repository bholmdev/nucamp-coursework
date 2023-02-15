var array=[1,2,3,4,5];
console.log(array.splice(2));
// shows [3, 4, 5], returned removed item(s) as a new array object.
 
console.log(array);
// shows [1, 2], original array altered.
 
var array2=[6,7,8,9,0];
console.log(array2.splice(2,1));
// shows [8]
 
console.log(array2.splice(2,0));
//shows [] , as no item(s) removed.
 
console.log(array2);
// shows [6,7,9,0]



var array=[1,2,3,4,5]
console.log(array.slice(2));
// shows [3, 4, 5], returned selected element(s).
 
console.log(array.slice(-2));
// shows [4, 5], returned selected element(s).
console.log(array);
// shows [1, 2, 3, 4, 5], original array remains intact.
 
var array2=[6,7,8,9,0];
console.log(array2.slice(2,4));
// shows [8, 9]
 
console.log(array2.slice(-2,4));
// shows [9]
 
console.log(array2.slice(-3,-1));
// shows [8, 9]
 
console.log(array2);
// shows [6, 7, 8, 9, 0]