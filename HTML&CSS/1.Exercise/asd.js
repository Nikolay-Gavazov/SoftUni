function maxDistance(barrelsQuantity, barrelValue, consum, tankValue) {
    let distance = 0;
    let tank = tankValue;
    let areBarrelsTogether = true;
    let barrels = [];
    for (let i = 0; i < barrelsQuantity; i++) {
        barrels.push({fuel: barrelValue, distance: 0 })
    }
    if (barrels.length == 0) {
        return;
    } else {
        while (barrels[0].fuel >= consum || tank >= consum) {
            for (let i = 0; i < barrels.length; i++) {
                let currentFuel = 0;
                barrels.forEach(el => {
                    currentFuel += el.fuel;
                })
                if (currentFuel <= barrelValue + tankValue) {
                    if (currentFuel > barrelValue) {
                        barrels[0].fuel = barrelValue;
                        tank = currentFuel - barrelValue;
                    } else {
                        barrels[0].fuel = currentFuel;
                    }
                    distance += lastBarrel(barrels);
                    return distance;
                }
                if (barrels.length == 1) {
                    distance += lastBarrel(barrels);
                    return distance;
                }
                if (i == barrels.length - 1) {
                    moveBarrel(barrels, i);
                } else if (barrels[i].distance >= barrels[i + 1].distance) {
                    let currentDistance = barrels[0].distance;
                    barrels.forEach(el => {
                        if (currentDistance == el.distance) {
                            areBarrelsTogether = true;
                        } else {
                            areBarrelsTogether = false;
                        }
                    });
                    if (areBarrelsTogether) {
                        distance = distance + (tank / consum) * 100;
                    }
                    moveBarrel(barrels, i);
                    if (barrels[i].fuel <= 0) {
                        barrels.splice(i, 1);
                    }
                    

                }
            }
        }
    }
    function lastBarrel(barrels) {
        let lastDistance = ((barrels[0].fuel + tank) / consum) * 100;
        return lastDistance;
    }
    function moveBarrel(barrels, i) {
        if(barrels[0].distance == 0) {
            barrels[0].fuel -= tankValue;  
        }else{
            barrels[i].fuel -= tankValue * 2;
        }
        barrels[i].distance = distance;
        tank = 0;

        tank = tankValue;
    }
}
console.log(maxDistance(3, 100, 10, 20))