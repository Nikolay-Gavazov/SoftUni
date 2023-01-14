function townPopulation(townArray) {

    let towns = {};

    townArray.forEach(el => {
        let [town, population] = el.split(' <-> ');
        if (!towns.hasOwnProperty(town)) {
            towns[town] = Number(population);
        } else {
            towns[town] += Number(population);
        }
    });
    for (let key in towns) {
        console.log(`${key} : ${towns[key]}`);
    }
}
townPopulation(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000', 'Montana <-> 20000'])