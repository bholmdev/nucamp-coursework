function rollDice() {
    let goldCoins = 0;
    for (i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You roll a ' + roll + '!');
            switch (roll) {
                case 1:
                    alert('Game over, no more rolls!');
                    return;
                case roll < 4:
                    alert('This awards you 0 gold coins.\nYour current score is ' + goldCoins + ' gold coins.');
                    continue;
                case ((roll === 4) && (goldCoins > 0)) : 
                    goldCoins -= 1;
                    alert('You have lost 1 gold coin.\nYour current score is ' + goldCoins + ' gold coins!');
                    break;               
                case roll >= 5:
                    goldCoins += roll;
                    alert('Congratulations, you win ' + roll + ' gold coins!\nYour current score is ' + goldCoins + ' gold coins!');
            }
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}
