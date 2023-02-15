const rect = {
    perimeter: (x, y) => 2 * (x + y),
    area: (x, y) => x * y
};

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}.`);

    if (l <= 0 || w <= 0) {
        console.log(`Rectangle dimensions must be greater than zero. Recieved: ${l}, ${w}.`);
    } else {
        console.log(`Area of rectangle: ${rect.area(l, w)}`);
        console.log(`Perimeter of rectangle: ${rect.perimeter(l, w)}`);
    }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);