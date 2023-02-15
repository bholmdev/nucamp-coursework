/*var myVar = 1;
let myLet = 2;
const myConst = 3;*/
var myVar= 2;
console.log(myVar);

function testVar() {
    var myVar = 1;
    console.log("Inside the function, myVar is: " + myVar);
}
testVar();
console.log(myVar);

if (true) {
    var a = 1;
}
console.log(a);

if (true) {
    let b = 2;
    const c = 3;
}
/*console.log(b);
console.log(c);*/

someVarIDidNotDeclare = "hi";
console.log(someVarIDidNotDeclare);