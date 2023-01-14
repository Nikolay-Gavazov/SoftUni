function counterStrike(input) {

    let health = Number(input.shift());
    let winCounter = 0;

    for (let i = 0; i < input.length; i++) {
        let comand = input[i];
        if (comand == 'End of battle') {
            console.log(`Won battles: ${winCounter}. Energy left: ${health}`);
        }
        else {
            let distance = Number(comand);
            if (health - distance < 0) {
                console.log(`Not enough energy! Game ends with ${winCounter} won battles and ${health} energy`);
                break;
            }
            health -= distance;
            winCounter++;
            if (winCounter % 3 == 0) {
                health += winCounter;
            }
        }
    }


}
counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])

counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])



