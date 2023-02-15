// Question #1: 
// You've learned that a typical for loop statement begins with three parts, which can be called the initialization, the condition, and the final expression, such as:
// for (let i = 0; i < 10; i++) 
// Are any of these three parts optional, or are they all required? Explain.

// Expression one is optional because you can define it before the loop.
// Expression two is also optional, BUT you must at least add a break or it will cause an infinite loop.
// Expresstion three is also optional and can be defined inside of the loop if needed.


// Question #2: 
// Name another array method that has not been covered and briefly explain what it does. Provide sample code.

// .entries() method
// provides a value pair for each index in the array
//ex:
let myArray = ['chocolate', 'vanilla', 'strawberry', 'lime'];
let myEntryArray = myArray.entries();

for (index of myEntryArray) {
    console.log(index);
}
/*ouput =   [ 0, 'chocolate' ]
            [ 1, 'vanilla' ]
            [ 2, 'strawberry' ]
            [ 3, 'lime' ]*/

// Question #3 
// Name another string method that has not been covered and briefly explain what it does. Provide sample code.

// .substring() method
// similar to slice, but start and end values are zero.  
let myStr = "My boat is taking on water!";
let subStr = myStr.substring(3, 7);
console.log(subStr);
// ouput = boat

// Question #4 
// You've learned about an escape sequence \n that creates a newline in a string. Provide another example of an escape sequence, or escape characters, and explain what it does.

// I found quite a few, but if you want to have multiple double quotes and or single quotes you can use \.

myEscStr = '"I can\'t believe it\'s not butter!" - \'Fabio\''
console.log(myEscStr);
// output = "I can't believe it's not butter!" - 'Fabio'

// Question #5
// You've learned that you can access the attributes of HTML elements using syntax such as: node.style.background and node.hidden. List at least two other HTML element attributes that you can access as JavaScript element node properties, and include sample code to demonstrate how you would use them in JavaScript. See this reference on W3Schools and this reference on MDN. (Note: methods end with () and properties do not.)

//childElementCount returns the number of child elements in an element.

let childCount = document.body.childElementCount;
// ouput = how many child elements total in body element.

// className sets or returs the value of the class attibute of an element.

if (document.body.firstElementChild.className === "firstDiv") {
    document.body.firstElementChild.className === "firstElement"
} else {
    document.body.firstElementChild.className === "firstDiv"
}
// output would change the class of the first Element of the body to "firstElement" if it is already set to firstDiv.  If it is already set to firstDiv, nothing will change.

// Question #6
// What is the return value from a call to node.removeChild()? What can you do with it? Show sample code to demonstrate how you might store the return value in a variable then use it. 

//  The return value allows you to select a specific element to remove and not every child element.

<ul id="coolList">
    <li>Red</li>
    <li>Blue</li>
    <li>Purple</li>
</ul>

const listNode = document.querySelector('#coolList');
listNode.removeChild(listNode.lastElementChild);
// output would remove the list item Purple

// Question #7
// What happens if you try to use the node.insertBefore() method to insert a node that already exists in the document, i.e. is already attached to the DOM? 

// insertBefore() will move it to the new postion that you assigned it.

// Question #8
// Research JavaScript events such as onclick/click, onmouseover/mouseover and find one that has not been discussed during this course. Give a brief explanation of what it does. 

// onkeydown will perform a function every time a keyboard key is pressed.

// Question #9
// You've seen how the array method sort() can be used to sort an array of strings alphabetically. What is its behavior when used to sort an array of numbers? For example, what would this array look like once sorted?: [1, 13, 1000, 29, 255]

// Initially the sort method will only select the firt number then each digit after so in this instance sort will not change the order.
let myNumArray = [1, 13, 1000, 29, 255];
sortedNumArray = myNumArray.sort();
console.log(sortedNumArray);

// You can sort numerical by using this function.
let myNumArray2 = [1, 13, 1000, 29, 255];
sortedNumArray2 = myNumArray2.sort(function(a, b){return a - b});
console.log(sortedNumArray2);

// You can reverst sort numerically by using this function.
let myNumArray3 = [1, 13, 1000, 29, 255];
sortedNumArray3 = myNumArray3.sort(function(a, b){return b - a});
console.log(sortedNumArray3);