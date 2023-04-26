function roadRadar(speed, area) {

    let limit = 0;

    switch (area) {
        case 'residential':
            limit = 20;
            break;
        case 'city':
            limit = 50;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'motorway':
            limit = 130;
            break;
    }
    let difference = speed - limit;
    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else if (difference <= 20) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - speeding`);
    } else if (difference <= 40) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - excessive speeding`);
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - reckless driving`);
    }


}
roadRadar(200, 'motorway')