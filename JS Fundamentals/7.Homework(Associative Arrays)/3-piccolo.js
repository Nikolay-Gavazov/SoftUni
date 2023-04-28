function piccolo(input) {

    let parking = new Map;

    input.forEach(el => {
        let currentEl = el.split(', ');
        let comand = currentEl[0];
        let car = currentEl[1];

        if (comand == 'IN') {
            parking.set(car, 1);
        } else {
            parking.delete(car);
        }
    });

    let sorted = Array.from(parking.keys())
        .sort((a, b) => a.localeCompare(b));

    sorted.forEach(el => {
        console.log(el);
    });

}
piccolo(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'IN, CA2844AA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU'])