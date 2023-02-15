const lightswitch = {
    switchState: "on",
    flipSwitch() {
        if (this.switchState === "on") {
            this.switchState = "off";
        }
        else {
            this.switchState = "on";
        }
    }
}
console.log(lightswitch);
lightswitch.flipSwitch();
console.log(lightswitch);
lightswitch.flipSwitch();
console.log(lightswitch);

lightswitch.flipSwitch = function() {
    (this.switchState === "on") ? this.switchState = "off" : this.switchState = "on";
}

console.log(lightswitch);
lightswitch.flipSwitch();
console.log(lightswitch);

function canVote(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}

console.log(canVote(16));
console.log(canVote(50));

function canVote(age) {
    return (age >= 18) ? true : false;
}

console.log(canVote(16));
console.log(canVote(50));