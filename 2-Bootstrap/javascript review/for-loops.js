for (let i = 1; i <= 10; i++) {
    console.log("The iterator is " + i);
}

let skipNum = 5;
for (let j = 1; j <=10; j++) {
    if (j === skipNum) {
        break;
    }
    console.log("The iterator is " + j);
}

for (let k = 10; k > 0; k--) {
    console.log("The iterator is " + k);
}