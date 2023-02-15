let pizzaSize = "large";
let numToppings = 2;
let pcost = getPizzaCost(pizzaSize, numToppings);
console.log(`The cost of the pizza is: $${pcost}.00.`);

function getPizzaCost(size, nToppings) {
    let cost = 10;
    if (size === "medium") {
        cost += 4;
    } else if (size === "large") {
        cost += 8;
    }
    cost += nToppings
    return cost;
}