function newHouse(input) {
    let flowers = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0;
    let diff = 0;

    switch (flowers) {
        case 'Roses':
            sum = numberOfFlowers * 5;
            if (numberOfFlowers > 80) {
                sum = sum * 0.9;
            }
            break;
        case 'Dahlias':
            sum = numberOfFlowers * 3.8;
            if (numberOfFlowers > 90) {
                sum = sum * 0.85;
            }
            break;
        case 'Tulips':
            sum = numberOfFlowers * 2.8;
            if (numberOfFlowers > 80) {
                sum = sum * 0.85;
            }
            break;
        case 'Narcissus':
            sum = numberOfFlowers * 3;
            if (numberOfFlowers < 120) {
                sum = sum * 1.15;
            }
            break;
        case 'Gladiolus':
            sum = numberOfFlowers * 2.5;
            if (numberOfFlowers < 80) {
                sum = sum * 1.2;
            }
            break;
    }
    if (budget >= sum) {
        diff = budget - sum;
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${diff.toFixed(2)} leva left.`);
    } else {
        diff = sum - budget;
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}
newHouse(["Narcissus", "119", "360"])