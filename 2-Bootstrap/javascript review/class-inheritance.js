/*class Monster {
    roar() {
        console.log(`The monster lets out a tremendous roar!`);
    }
};

class Dragon extends Monster {
    fly() {
        console.log(`The dragon flaps it's wings and begins to fly.`);
    }
};

const dragon1 = new Dragon();
dragon1.roar();
dragon1.fly();

const monster1 = new Monster;
monster1.fly();*/

class Monster {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
};

class Dragon extends Monster {
    constructor(type, color, element) {
        super(type, color);
        this.element = element;
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps it's wings and begins to fly.`);
    }
};

const dragon1 = new Dragon("dragon", "blue", "water");
dragon1.roar();
dragon1.fly();

class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.type} howls loudly!`);
    }
};

const werewolf1 = new Werewolf("werewolf", "gray");
werewolf1.howl();