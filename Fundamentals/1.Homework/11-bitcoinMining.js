function bitcoinMining(input) {

    let day = 0;
    let index = 0;
    let grams = Number(input[index]);
    index++;
    let goldPrice = 67.51;
    let bitcoinPrice = 11949.16;
    let bitcoinCounter = 0;
    let currentAmount = 0;
    let amount = 0;
    let dayOfFirstBitcoin = 0;

    for (let i = 1; i <= input.length; i++) {
        day++;
        if (day % 3 === 0) {
            grams *= 0.7;
        }
        amount = goldPrice * grams;
        currentAmount += amount;
        grams = Number(input[index]);
        index++;
        while (currentAmount >= bitcoinPrice) {
            currentAmount = currentAmount - bitcoinPrice;
            bitcoinCounter++;
            if (bitcoinCounter === 1) {
                dayOfFirstBitcoin = day;
            }
        }

    }

    console.log(`Bought bitcoins: ${bitcoinCounter}`);
    if (dayOfFirstBitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${currentAmount.toFixed(2)} lv.`);

}
bitcoinMining([50, 100])