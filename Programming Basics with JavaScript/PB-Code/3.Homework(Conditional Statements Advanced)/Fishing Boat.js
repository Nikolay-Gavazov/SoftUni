function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishMann = Number(input[2]);

    let priceForBoat = 0;
    let diff = 0;

    switch (season) {
        case 'Spring':
            priceForBoat = 3000;
            break;
        case 'Summer':
        case 'Autumn':
            priceForBoat = 4200;
            break;
        case 'Winter':
            priceForBoat = 2600;
            break;
    }
    if (fishMann <= 6) {
        priceForBoat = priceForBoat * 0.9;
    } else if (fishMann > 6 && fishMann <= 11) {
        priceForBoat = priceForBoat * 0.85;
    } else {
        priceForBoat = priceForBoat * 0.75;
    }
    if (fishMann % 2 === 0 && season !== 'Autumn') {
        priceForBoat = priceForBoat * 0.95;
    }
    if (budget >= priceForBoat) {
        diff = budget - priceForBoat;
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        diff = priceForBoat - budget;
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
fishingBoat(["2000", "Winter", "13"])