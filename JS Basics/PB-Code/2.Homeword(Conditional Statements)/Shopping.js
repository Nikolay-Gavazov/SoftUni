function shopping(input){
    let budget = Number(input[0]);
    let videoCard = Number(input[1]);
    let processor = Number(input[2]);
    let ram = Number(input[3]);

    let priceForVideoCard = videoCard * 250;
    let priceForProcessor = (priceForVideoCard * 0.35) * processor;
    let priceForRam = (priceForVideoCard * 0.1) * ram;

    let totalSum = priceForVideoCard + priceForProcessor + priceForRam;

    if(videoCard > processor){
        totalSum = totalSum * 0.85;
    }
    if (budget >= totalSum){
        let rest = budget - totalSum;
        console.log(`You have ${rest.toFixed(2)} leva left!`);
    }else {
        let rest = totalSum - budget
        console.log(`Not enough money! You need ${rest.toFixed(2)} leva more!`);
    }

}
shopping(["920.45",

"3",

"1",

"1"])