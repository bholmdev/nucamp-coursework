// Examples of destructuring

const [banana, apple] = ['yellow', 'red'];
// the variable banana will contain the value 'yellow'
// the variable apple will contain the value 'red'
console.log(banana, apple);

const transformNum = (num) => [num * 2, num + 2];
const [numTimesTwo, numPlusTwo] = transformNum(10)
// the variable numTimesTwo will contain the value 20
// the variable numPlus Two will contain the value 12
console.log(numTimesTwo, numPlusTwo);

// const [state, setState] = useState(initialState);
// array destructuring is used to get the state and setState values
// from the useState hook -- you will learn about this soon!