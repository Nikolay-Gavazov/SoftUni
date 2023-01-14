function cardGame(input) {

    let players = {};

    input.forEach(el => {
        let arr = el.split(': ');
        let name = arr.shift();
        let card = arr.shift().split(', ');

        if (!players.hasOwnProperty(name)) {
            players[name] = card;
        } else {
            players[name] += `,${card}`
        }
    });

    for (let key in players) {
        let cards = players[key].split(',').filter((v, i, a) => a.indexOf(v) === i);
        let totalPower = 0;
        for (let el of cards) {
            let currentEl = el.split('');
            let comand = currentEl.pop();
            let power = currentEl.join('');
            if (power == 'J') {
                power = 11;
            } else if (power == 'Q') {
                power = 12;
            } else if (power == 'K') {
                power = 13;
            } else if (power == 'A') {
                power = 14;
            }

            switch (comand) {
                case 'S':
                    totalPower += 4 * Number(power);
                    break;
                case 'H':
                    totalPower += 3 * Number(power);
                    break;
                case 'D':
                    totalPower += 2 * Number(power);
                    break;
                case 'C':
                    totalPower += Number(power);
                break;
            }
        }
        console.log(`${key}: ${totalPower}`);
    }
}
cardGame([

    'Peter: 2C, 4H, 9H, AS, QS',
    
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    
    'Andrea: QH, QC, QS, QD',
    
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    
    'Andrea: QH, QC, JS, JD, JC',
    
    'Peter: JD, JD, JD, JD, JD, JD'
    
    ])