// Question 1
console.log(Math.sqrt(49));

// Question 2
let x = "15"
while (x > 3) {
    x -= 1
    console.log(x);
}

//Question 3
let myWord = "Hello";
console.log(myWord += " World");

// Question 4
let convertString = "27.57";
console.log(+convertString + 3);
let convertString2 = "30";
console.log(parseFloat(convertString2));
let convertNumber = 27;
console.log("I will be " + convertNumber.toString() + " in May.");

// Question 5
/* Putting a script in the head of an html document can work however, it is not recommended because it can cause delays or possibly not work at all.  This is because it will load the javascript before the html page.*/

// Question 6
/* You can do line comments like above or block like this.*/

// Question 7
let myArray = ["bananas", "strawberries", "lemons", "oranges"];
let myArray2  = ["limes", "papayas", "grapefruit"];
let myArray3 = ["potatoes", "lettuce", "broccoli"];
let combinedArrays = myArray.concat(myArray2, myArray3);
console.log(combinedArrays);

// Question 8
/*You can use NaN to define and oject as not at number.  Example:  In an if statement you can use isNaN to say if object is not a number return "This is not a number, please use a number.*/