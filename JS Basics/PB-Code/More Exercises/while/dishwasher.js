function dishwasher(input) {
    let index = 0;
    let detergent = Number(input[index]);
    index++;

    let comand = input[index];
    index++

    let dishes = 0;
    let pots = 0;
    let detergentValue = detergent * 750;
    let detergentForDishes = 0;
    let detergentForPots = 0;

    while (comand !== 'End') {
        if ((index - 1) % 3 === 0) {
            pots += Number(comand);
            detergentForPots += Number(comand) * 15;
        } else {
            dishes += Number(comand);
            detergentForDishes += Number(comand) * 5;
        }
        if(detergentForDishes + detergentForPots > detergentValue){
            break;
        }
        comand = input[index];
        index++;
    }
    
    let totalDetergent = detergentForDishes + detergentForPots;

    let diff = Math.abs(totalDetergent - detergentValue);
    if (totalDetergent <= detergentValue) {
        console.log('Detergent was enough!');
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${diff} ml.`);
    } else {
        console.log(`Not enough detergent, ${diff} ml. more necessary!`);
    }
}
dishwasher([1,
    10,
    15,
    10,
    12,
    13,
    30,
    
])