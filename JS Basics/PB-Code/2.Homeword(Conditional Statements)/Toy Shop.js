function toyShop(input) {
    let excursion = Number(input[0]);
    let puzzle = Number(input[1]);
    let talkingDoll = Number(input[2]);
    let teddyBear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);

    let priceForToys = (puzzle * 2.6) + (talkingDoll * 3) + (teddyBear * 4.1) + (minion * 8.2) + (truck * 2);
    let valueOfToys = puzzle + talkingDoll + teddyBear + minion + truck;
    let discount = 0;
    let totalPrice = 0;
    let profit = 0;
    let moneyLeft = 0;
    let moneyNeeded = 0;

    if (valueOfToys >= 50) {
        discount = priceForToys * 0.25;
        totalPrice = priceForToys - discount;
        profit = totalPrice - (totalPrice * 0.1);
    }else {
        totalPrice = priceForToys - discount;
        profit = totalPrice - (totalPrice * 0.1);
    }
    if (profit >= excursion){
        moneyLeft = profit - excursion
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    
    }else {
        moneyNeeded = excursion - profit
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }

}
toyShop(["320", "8", "2", "5", "5", "1"])