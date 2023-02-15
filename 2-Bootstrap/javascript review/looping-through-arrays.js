const pets = ["dog", "cat", "fish"];

for (let i = 0; i < pets.length; i++) {
    console.log("I have a " + pets[i]);
}

for (const pet of pets) {
    console.log("I have a " + pet);
}

pets.forEach(animal => {
    console.log("I have a " + animal);
});

for (let j = 0; j < pets.length; j++) {
    pets[j] = pets[j].toUpperCase();
    console.log("I have a " + pets[j]);
}

console.log(pets);