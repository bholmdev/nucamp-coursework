const groceryList = ["eggs", "coffee beans", "salad"];
console.log(groceryList);
console.log(groceryList[1]);

groceryList[0] = "bananas";
groceryList[2] = "soap";
console.log(groceryList);

console.log(groceryList.length);

console.log(groceryList[groceryList.length-1]);

// Array methods
groceryList.pop();
console.log(groceryList);

groceryList.push("milk");
console.log(groceryList);

groceryList.shift();
console.log(groceryList);

groceryList.unshift("strawberries");
console.log(groceryList);

const groceries = groceryList.join();
console.log(groceries);

const groceriesArgument = groceryList.join("--");
console.log(groceriesArgument);

console.log(groceryList.includes("soap"));
console.log(groceryList.includes("coffee beans"));

console.log(groceryList.indexOf("strawberries"));
console.log(groceryList.indexOf("milk"));
console.log(groceryList.indexOf("fun"));