function switchPrompt() {
    let testPrompt = prompt("What size is the chair?");
}
alert(testSwitch(size));

function testSwitch(size) {
    switch (size) {
        case "small":
            alert("This chair is too small!");
            break;
        case "medium":
            alert("This chair is just right");
            break;
        case "large":
            alert("This chair is too big!");
            break;
        default:
            alert("This chair is an unknown size");
    }
}
