function manOWar(input) {

    let pirateShip = input.shift().split('>').map(Number);
    let warship = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift());
    let lines = input.shift().split(' ');
    let isPirateShipSinks = false;
    let isWarshipSinks = false;


    while (lines != 'Retire') {
        let comand = lines[0];
        let index = Number(lines[1]);
        let endIndex = 0;
        let damage = 0;
        let health = 0;

        switch (comand) {
            case 'Fire':
                damage = Number(lines[2]);
                if (warship[index]) {
                    warship[index] -= damage;
                }
                if (warship[index] <= 0) {
                    isWarshipSinks = true;
                }
                break;
            case 'Defend':
                endIndex = Number(lines[2]);
                damage = Number(lines[3]);
                if (pirateShip[index] && pirateShip[endIndex]) {
                    for (let i = index; i <= endIndex; i++) {
                        pirateShip[i] -= damage;
                        if (pirateShip[i] <= 0) {
                            isPirateShipSinks = true;
                        }
                    }
                }
                break;
            case 'Repair':
                health = Number(lines[2]);
                if (pirateShip[index]) {
                    pirateShip[index] += health;
                }
                if (pirateShip[index] > maxHealth) {
                    pirateShip[index] = maxHealth;
                }
                break;
            case 'Status':
                let needRepairValue = maxHealth * 0.2;
                let count = 0;
                for (let i = 0; i < pirateShip.length; i++) {
                    if (pirateShip[i] < needRepairValue) {
                        count++;
                    }
                }
                console.log(`${count} sections need repair.`);
        }
        if (isWarshipSinks) {
            console.log('You won! The enemy ship has sunken.');
            break;
        }
        if (isPirateShipSinks) {
            console.log('You lost! The pirate ship has sunken.');
            break;
        }
        lines = input.shift().split(' ');
    }
    let pirateShipStatus = 0;
    for (let number of pirateShip) {
        pirateShipStatus += number
    }

    let warshipStatus = 0;
    for (let number of warship) {
        warshipStatus += number
    }
    if (!isPirateShipSinks && !isWarshipSinks) {
        console.log(`Pirate ship status: ${pirateShipStatus}`);
        console.log(`Warship status: ${warshipStatus}`);
    }



}
manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])
