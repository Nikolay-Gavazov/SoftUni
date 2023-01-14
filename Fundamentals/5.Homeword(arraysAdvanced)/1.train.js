function train(array) {

    let passengersInWagons = array.shift().split(' ');
    let maxPassengers = Number(array.shift());
    let length = array.length;
    let comand = [];
    let currentElement = '';

    for (let i = 0; i < length; i++) {
        currentElement = array[i].split(' ');
        comand = currentElement[0];
        if (comand === 'Add') {
            comand = (currentElement[1]);
            passengersInWagons.push(comand);
        } else {
            for (let j = 0; j < passengersInWagons.length; j++) {
                if (Number(comand) + Number(passengersInWagons[j]) <= maxPassengers) {
                    passengersInWagons[j] = Number(comand) + Number(passengersInWagons[j]);
                    break;
                }
            }
        }

    }

    console.log(passengersInWagons.join(' '));

}
train(['32 54 21 12 4 0 23',

    '75',

    'Add 10',

    'Add 0',

    '30',

    '10',

    '75'])