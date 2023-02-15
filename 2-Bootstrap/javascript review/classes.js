/*class Dragon {
    constructor(color, maxHP) {
        this.color = color;
        this.maxHP = maxHP;
    }
};

const dragon1 = new Dragon("red", 1200);
const dragon2 = new Dragon("blue", 1000);
console.log(dragon1);
console.log(dragon2);*/

class Dragon {
    constructor(color, maxHP) {
        this.color = color;
        this.maxHP = maxHP;
    }
    roar() {
        console.log(`The ${this.color} dragon lets out a tremendous roar!`);
    }
};
const dragon1 = new Dragon("red", 1200);
const dragon2 = new Dragon("blue", 1000);
dragon1.roar();
dragon2.roar();

