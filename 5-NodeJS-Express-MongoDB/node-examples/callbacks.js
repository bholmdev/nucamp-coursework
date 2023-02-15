const outerFn = () => {
    const x = 5;
    const innerFn = () => console.log(x);
    innerFn();
};

outerFn();

const outerFn2 = () => {
    const x = 5;
    const innerFn2 = () => console.log(x);
    return innerFn2;
}

const closureTest = outerFn2();
console.log(closureTest);
closureTest();
console.dir(closureTest);