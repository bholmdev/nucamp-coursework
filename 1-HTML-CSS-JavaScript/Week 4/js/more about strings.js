const myStr = 'abcdefg'
x = myStr.indexOf() + 1;
for (const index of myStr) {
    console.log('Letter #' + (x += 1) + ' = ' + index);
}


// Splitting strings
const myStr2 = 'little red balloon';
let splitArray = myStr.split('');
let splitArray2 = myStr2.split(' ');
console.log(splitArray);
console.log(myStr2);
console.log(splitArray2);