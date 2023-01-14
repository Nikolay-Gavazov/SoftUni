function heartDelivery(input) {

    let neighborhood = input.shift().split('@')
    let comand = input.shift().split(' ');
    const decreased = 2;
    let index = 0;

    while (comand != 'Love!') {
        index += Number(comand[1]);
        if (index >= neighborhood.length) {
            index = 0;
        }

        neighborhood[index] -= decreased;
        if (neighborhood[index] == 0) {
            console.log(`Place ${index} has Valentine's day.`);
        }

        if (neighborhood[index] < 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        }

        comand = input.shift().split(' ');
    }
    console.log(`Cupid's last position was ${index}.`);

    let failedPlaces = 0;

    for (let i = 0; i < neighborhood.length; i++) {
        if (neighborhood[i] > 0) {
            failedPlaces++;
        }
    }

    if (failedPlaces == 0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${failedPlaces} places.`);
    }

}
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])
