function godzillaVsKong(input) {
    let budged = Number(input[0]);
    let statists = Number(input[1]);
    let clothing = Number(input[2]);

    let priceForDecor = budged * 0.1;
    let priceForClothing = statists * clothing;
    let discount = 0;
    let totalPriceForClothing = priceForClothing - discount
    let totalPriceForMovie = budged - (priceForDecor + totalPriceForClothing)
    let moneyNeeded = 0;

    if (statists > 150 && totalPriceForMovie < 0) {
        discount = priceForClothing * 0.1;
        totalPriceForClothing = priceForClothing - discount;
        totalPriceForMovie = budged - (priceForDecor + totalPriceForClothing)
        moneyNeeded = (totalPriceForClothing + priceForDecor) - budged
        console.log(`
Not enough money!
Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } else if (statists > 150 && totalPriceForMovie >= 0) {
        discount = priceForClothing * 0.1;
        totalPriceForClothing = priceForClothing - discount;
        totalPriceForMovie = budged - (priceForDecor + totalPriceForClothing)
        console.log(`
Action!
Wingard starts filming with ${totalPriceForMovie.toFixed(2)} leva left.`);

    } else if (totalPriceForMovie >= 0) {
        console.log(`
Action!
Wingard starts filming with ${totalPriceForMovie.toFixed(2)} leva left.`);

    } else {
        moneyNeeded = (totalPriceForClothing + priceForDecor) - budged
        console.log(`
Not enough money!
Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }
} godzillaVsKong(["20000",

    "120",

    "55.5"])