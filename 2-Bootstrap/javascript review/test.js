// 3 - shopping cart
const cart = {
  contents: [],
  addItem(item) {
    this.contents.push(item);
  },
  removeItem(item) {
    if (this.contents.includes(item)) {
      this.contents.pop(item);
      console.log(`The ${item} has been removed!`);
    }
    else {
      console.log(`There is no ${item} in the cart.`);
    }
  }
};

cart.addItem("laptop");
console.log("The cart contains:", cart.contents);
cart.removeItem("laptop");
cart.removeItem("laptop");