// while loop
let i = 0
while (i < 5) {
    console.log('Loop iteration #' + i);
    i++;
}

// for loop
for (let j = 0; j < 50; j += 10) {
    console.log('Loop iteration #' + j);
}

const guestsArray = ['Jack', 'Aravind', 'Samira', 'Haley', 'Lydia', 'Adrian'];
for (let i = 0; i < guestsArray.length; i++) {
    console.log('Welcome to the party ' + guestsArray[i] + '!');
}

for (let guest of guestsArray) {
    console.log('Welcome to the party ' + guest + '!');
}