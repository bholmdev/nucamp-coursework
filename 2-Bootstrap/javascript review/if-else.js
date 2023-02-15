console.log("WILL THE DOG GET A BONE?");

let dogSits = Math.floor(Math.random() * 2);
if (dogSits) {
    dogGetsTreat = true;
    console.log("Yay!  Your dog gets a bone!");
} else {

    console.log("Too bad.  Your dog does not get a bone.")
}

console.log("DICE ROLL");

let roll = Math.floor(Math.random() * 10) + 1;
console.log(roll);
/*let roll;*/

if (roll === 1 || roll === 6) {
    console.log("You Win!");
} else {
    console.log("You lose!");
}

if (roll === 1) {
    console.log("You won with the number 1.  Try and get a 6 for a happy message!");
} else if (roll > 1 && roll <= 3) {
    console.log("Number is betwePlease roll again!");
} else if (roll > 3 && roll < 6) {
    console.log("Number is between 1 and 6.  Keep rolling.");
} else if (roll === 6) {
    console.log("You win with a 6 and it's going to be a good day!  Game over.");
} else if (roll > 6 && roll <= 10) {
    console.log("Your roll is above 6.  Keep rolling.");
} else {
    console.log("Please enter a number from 1 - 10.");
}

/* Switches */
console.log("WHAT NUMBER DID YOU GET?");
let n = Math.floor(Math.random() * 5) + 1;

switch(n) {
    case 1:
        console.log("The number is 1.");
        break;
    case 2:
        console.log("The number is 2.");
        break;
    case 3:
        console.log("The number is 3.");
        break;
    case 4:
        console.log("The number is 4.");
        break;
    default:
        console.log("The number is not 1-4");
}