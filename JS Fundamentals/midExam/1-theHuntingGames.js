function theHuntingGames(input) {

    let days = Number(input.shift());
    let players = Number(input.shift());
    let groupEnergy = Number(input.shift());
    let waterPerPerson = Number(input.shift());
    let foodPerPerson = Number(input.shift());
    let totalWater = days * players * waterPerPerson;
    let totalFood = days * players * foodPerPerson;
    let reduceEnergy = 0;
    let length = input.length;

    for (let i = 1; i <= length; i++) {
        reduceEnergy = Number(input[i - 1]);
        groupEnergy -= reduceEnergy;
        if (groupEnergy <= 0) {
            break;
        }
        if (i % 2 == 0) {
            totalWater *= 0.7;
            groupEnergy *= 1.05;
        }
        if (i % 3 == 0) {
            let reduceFood = totalFood / players;
            totalFood -= reduceFood;
            groupEnergy *= 1.1;
        }


        totalWater.toFixed(2);
        totalFood.toFixed(2);
        groupEnergy.toFixed(2);

    }

    if (groupEnergy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    }

}
theHuntingGames(["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"])

