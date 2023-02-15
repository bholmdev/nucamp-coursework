function sayHello(userName) {
    console.log("Hello " + userName);
}

sayHello("Brandon");

function sayGoodbuy(userName) {
    console.log("Goodbye " + userName);
}

sayGoodbuy("Brandon");

let pizzaSize = "large";
let numToppings = 2;

let pCost = getPizzaCost(pizzaSize, numToppings);
console.log("Cost: $" + pCost);

function getPizzaCost(size, nToppings) {
    let cost = 10;
    if (size === "medium") {
        cost += 4;
    } else if (size === "large") {
        cost += 8;
    }
    cost += nToppings;
    return cost;
}
getPizzaCost("medium", 3);