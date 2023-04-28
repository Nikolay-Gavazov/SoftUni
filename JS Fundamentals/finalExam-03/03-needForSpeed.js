function needForSpeed(input) {

    let n = Number(input.shift());

    let allCars = [];
    let carObj = {};

    let line = input.shift();

    for (let i = 0; i < n; i++) {
        line = line.split('|');
        let car = line[0];
        let mileage = Number(line[1]);
        let fuel = Number(line[2]);

        carObj = { car, mileage, fuel };
        allCars.push(carObj);

        line = input.shift();
    }

    while (line != 'Stop') {
        line = line.split(' : ');
        let comand = line[0];

        switch (comand) {
            case 'Drive':
                {
                    let currentCar = line[1];
                    let distance = Number(line[2]);
                    let currentFuel = Number(line[3]);
                    const result = allCars.find((x) => x.car == currentCar);
                    const index = allCars.indexOf(result);

                    if (allCars[index].fuel >= currentFuel) {
                        allCars[index].mileage += distance;
                        allCars[index].fuel -= currentFuel;
                        console.log(`${currentCar} driven for ${distance} kilometers. ${currentFuel} liters of fuel consumed.`);
                    } else {
                        console.log('Not enough fuel to make that ride');
                    }
                    if (allCars[index].mileage >= 100000) {
                        allCars.splice(index, 1);
                        console.log(`Time to sell the ${currentCar}!`);
                    }
                }
                break;
            case 'Refuel':
                {
                    let currentCar = line[1];
                    let currentFuel = Number(line[2]);
                    const result = allCars.find((x) => x.car == currentCar);
                    const index = allCars.indexOf(result);
                    if (allCars[index].fuel + currentFuel <= 75) {
                        allCars[index].fuel += currentFuel;
                        console.log(`${currentCar} refueled with ${currentFuel} liters`);
                    } else {
                        let fuelNeed = 75 - allCars[index].fuel;
                        allCars[index].fuel = 75;
                        console.log(`${currentCar} refueled with ${fuelNeed} liters`);
                    }
                }
                break;
            case 'Revert':
                {
                    let currentCar = line[1];
                    let kilometers = Number(line[2]);
                    const result = allCars.find((x) => x.car == currentCar);
                    const index = allCars.indexOf(result);

                    allCars[index].mileage -= kilometers;

                    if (allCars[index].mileage < 10000) {
                        allCars[index].mileage = 10000;
                    } else {
                        console.log(`${currentCar} mileage decreased by ${kilometers} kilometers`);
                    }

                }
                break;
        }

        line = input.shift()
    }

    allCars.forEach(el => {
        console.log(`${el.car} -> Mileage: ${el.mileage} kms, Fuel in the tank: ${el.fuel} lt.`);
    });

}
needForSpeed([ 

    '4', 

  'Lamborghini Veneno|11111|74', 

  'Bugatti Veyron|12345|67', 

  'Koenigsegg CCXR|67890|12', 

  'Aston Martin Valkryie|99900|50', 

  'Drive : Koenigsegg CCXR : 382 : 82', 

  'Drive : Aston Martin Valkryie : 99 : 23', 

  'Drive : Aston Martin Valkryie : 2 : 1', 

  'Refuel : Lamborghini Veneno : 40', 

  'Revert : Bugatti Veyron : 2000', 

  'Stop' 
  
  ])