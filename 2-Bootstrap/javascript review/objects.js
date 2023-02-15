const dragon1 = {
    color: "red",
    maxHP: 1000
}

console.log(dragon1);
console.log(dragon1.color);
console.log(dragon1.maxHP);
console.log(dragon1["color"]); /* will discuss later */

const dragon2 = {
    color: "blue",
    maxHP: 1000,
    roar() {
        console.log("The dragon roars ferociously.");
    }
};
dragon2.roar();

dragon1.element = "fire";
console.log(dragon1);
dragon1.color = "crimson";
console.log(dragon1);
dragon1.attack = function() {
    console.log("The dragon breathes a stream of white-hot flame at you!");
};
dragon1.attack();

dragon2.roar = function() {
    console.log("The dragon lets out a tremendous roar!");
};
dragon2.roar();

dragon2.element = "water";
dragon2.swim = function(dir) {
    console.log(`The dragon swims away to the ${dir}.`);
};
dragon2.swim("north");