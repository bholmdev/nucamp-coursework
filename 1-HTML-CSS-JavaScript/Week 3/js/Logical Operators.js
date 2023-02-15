function viewerAge(age) {    ;
    let regular = 20;
    let seniorMinor = 10;
    if ((age >= 12) && (age < 65)) {
        return "Your Price is $" + regular;
    }
    else if ((age <12) || (age >= 65)) {
        return "Your Price is $ " + seniorMinor;
    }
    else {
        return "Please enter a proper age!"
    }
}

console.log(viewerAge(64));
console.log(viewerAge(12));
console.log(viewerAge(65));
console.log(viewerAge(11));
console.log(viewerAge("twenty one"));