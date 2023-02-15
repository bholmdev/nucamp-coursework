function logSum(a, b) {
    console.log(a + b);
}
logSum(2, 3);
logSum(2);

function logSum2(a, b) {
    if (a === undefined) {a = 0}
    if (b === undefined) {b = 0}
    console.log(a + b);
}
logSum2(2);

function logSum3(a = 0, b = 0) {
    console.log(a + b);
}
logSum(0, 9);
logSum3(7, 9);

class Cat {
    constructor(name, color = "gray") {
        this.name = name;
        this.color = color;
    }
    meow () {
        console.log(`The ${this.color} cat named ${this.name} meows.`);
    }
}

const ray = new Cat("Ray");
const pat = new Cat("Pat", "black");
ray.meow();
pat.meow();