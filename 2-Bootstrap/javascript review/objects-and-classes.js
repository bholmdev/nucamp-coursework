const dragon1 = {
    color: "red",
    roar() {
        console.log("The dragon lets out a tremendous roar!");
    }
};
dragon1.roar();

/*dragon1.roar = function() {
    console.log(`The ${color} dragon lets out a tremendous roar!`);
};*/

dragon1.roar = function() {
    console.log(`The ${dragon1.color} dragon lets out a tremendous roar!`);
};
dragon1.roar();

const dragon2 = {
    color: "blue",
    roar() {
        console.log(`The ${dragon1.color} dragon lets out a tremendous roar!`);
    }
};
dragon2.roar();
dragon2.roar = function() {
    console.log(`The ${dragon2.color} dragon lets out a tremendous roar!`);
};
dragon2.roar();

dragon1.roar = function() {
    console.log(`The ${this.color} dragon lets out a tremendous roar!`);
};

dragon1.roar = function() {
    console.log(`The ${this.color} dragon lets out a tremendous roar!`);
};

dragon1.roar();
dragon2.roar();