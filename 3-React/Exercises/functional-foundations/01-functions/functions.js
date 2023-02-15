// My code

/* const greetUser = (userName) => {
    console.log(`Hi there, ${userName}`);
}
greetUser("Sam"); */

/* const greetUser = (userName, msg = "Hi, ") => {
    console.log(msg + userName);
}
greetUser("Sam");
greetUser("Sam", "Where are you, "); */

const logMessage = (msg) => {
    console.log(msg);
}
const greetUser = (func, userName) => {
    func(`Hi there, ${userName}`);
}
greetUser(logMessage, "Sam");

/* const greetUser = (func, userName) => {
    func(`Hi there, ${userName}`);
}
greetUser((msg) => console.log(msg), "Sam"); */

/* const sum = (a, b) => {
    return a + b;
}
console.log(sum(1, 3)); */

/* const logMessage = (punctuation) => {
    return (msg) => console.log(msg + punctuation);
}
const logConfused = logMessage(`??!?!`);
console.log(logConfused);
logConfused(`What the heck`);
const logExcited = logMessage(`!!!!!`);
logExcited(`Actually this is pretty cool`);
logMessage('??!?')('what the heck');
logMessage(`!!!!!`)('this is pretty cool'); */

// Started Code

/* // syntax basics
function doNothingReturnNothing() {}

const doNothingReturnNothing = function () {};

const doNothingReturnNothing = () => {};

// function parameters 1
const greetUser = (userName) => {
    console.log('hi there, ' + userName);
};
//greetUser('Sam')

// function parameters 2
const greetUser = (msg = 'hi, ', userName) => {
    console.log(userName);
};
//greetUser('Sam')

// function parameters 3

const logMessage = (msg) => {
    console.log(msg);
};

const greetUser = (func, userName) => {
    func('hi there, ' + userName);
};
//greetUser(logMessage, 'Sam')

// anonymous callback function
const greetUser = (func, userName) => {
    func('hi there, ' + userName);
};

//greetUser((msg) => console.log(msg), 'Sam')

// return values
// const sum = (a,b) => {
//     return a + b;
//     };

// const sum = (a,b) => a + b;

// functions returning functions

const logMessage = (punctuation) => {
    return (msg) => console.log(msg + punctuation);
};

// store the return value of the function in a variable
const logConfused = logMessage('??!?');

// value of the variable confused will be a FUNCTION
console.log(logConfused);
logConfused('what the heck'); // logs 'what the heck??!?'

const logExcited = logMessage('!!!!!');
logExcited('actually this is pretty cool'); // logs 'this is pretty cool!!!!!'

logMessage('??!?')('what the heck'); // logs 'what the heck??!?'
logMessage('!!!!!')('this is pretty cool'); // logs 'this is pretty cool!!!!!' */
