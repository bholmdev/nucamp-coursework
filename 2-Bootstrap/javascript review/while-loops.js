let i = 1;

while (i <= 10) {
    console.log("The iterator is " + i);
    i++;
}

let j = 1;

do {
    console.log("The iterator is " + j);
    j++
} while (j > 1 && j <= 10);

let k = 1;
let earlyEscapeNum = 6;

while (k <= 10) {
    if (k === earlyEscapeNum) {
        break;
    }
    console.log("The iterator is " + k);
    k++
}

let l = 1;
let skipNum = 6;

while (l < 10) {
    l++;
    if (l === skipNum) {
        continue;
    }
    console.log("The iterator is " + l);
}