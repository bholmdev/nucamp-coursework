function rollDice() {
    let goldCoins = 0;
    for (i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You roll a ' + roll + '!');
        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }
        if (roll < 4) {
            alert('This awards you 0 gold coins.\nYour current score is ' + goldCoins + ' gold coins.');
            continue;
        }
        if ((roll === 4) && (goldCoins > 0)) {
            goldCoins -= 1;
            alert('You have lost 1 gold coin.\nYour current score is ' + goldCoins + ' gold coins!');
        }
        if (roll >= 5) {
        goldCoins += roll;
        alert('Congratulations, you win ' + roll + ' gold coins!\nYour current score is ' + goldCoins + ' gold coins!');
        }
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}
