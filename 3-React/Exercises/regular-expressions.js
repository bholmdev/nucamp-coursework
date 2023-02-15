const myReg = /^\d+$/;
console.log(myReg.test("hello"));
console.log(myReg.test(12345));
console.log(myReg.test("12345"));
console.log(myReg.test("abc3456"));