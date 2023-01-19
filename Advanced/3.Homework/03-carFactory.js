function carFactory({ model, power, color, carriage, wheelsize }) {
    const engine = {};
    let wheels = [];
    if (power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (power <= 120) {
        engine.power = 12;
        engine.volume = 2400;
    } else {
        engine.power = 200;
        engine.volume = 3500;
    }

    if (wheelsize % 2 === 0) {
        wheels = Array(4).fill(wheelsize - 1)
    } else {
        wheels = (Array(4).fill(wheelsize))
    }
    const result = {
        model,
        engine,
        carriage: {
            type: carriage,
            color
        },
        wheels: wheels
    };

    return result;
}
carFactory({ model: 'VW Golf II',

power: 90,

color: 'blue',

carriage: 'hatchback',

wheelsize: 14 })