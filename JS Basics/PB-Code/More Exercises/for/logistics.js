function logistics(input) {
    let n = Number(input[0]);

    let cargo = 0;

    let bus = 0;
    let truck = 0;
    let train = 0;

    let busTons = 0;
    let truckTons = 0;
    let trainTons = 0;

    for(let i = 1; i <= n; i++){
        cargo = Number(input[i]);
        if(cargo < 4){
            busTons += cargo;
            bus++;
        }else if(cargo >= 4 && cargo < 12){
            truckTons += cargo;
            truck++
        }else{
            trainTons += cargo;
            train++
        }
    }

    let priceForBus = busTons * 200;
    let priceForTruck = truckTons * 175;
    let PriceForTrain = trainTons * 120;

    let totalPrice = priceForBus + priceForTruck + PriceForTrain;
    let totalTons = (busTons + trainTons + truckTons)

    let avgPrice = totalPrice / totalTons;
    let avgBus = (busTons / totalTons) * 100;
    let avgTruck = (truckTons / totalTons) * 100;
    let avgTrain = (trainTons / totalTons) * 100;

    console.log(avgPrice.toFixed(2));
    console.log(`${avgBus.toFixed(2)}%`);
    console.log(`${avgTruck.toFixed(2)}%`);
    console.log(`${avgTrain.toFixed(2)}%`);
}