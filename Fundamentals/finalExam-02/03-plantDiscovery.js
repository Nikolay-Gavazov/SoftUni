function plantDiscovery(input) {

    const n = Number(input.shift());
    let plantsObj = {};
    let plants = [];
    let line = input.shift();

    for (let i = 0; i < n; i++) {
        line = line.split('<->');
        const plant = line[0];
        const rarity = Number(line[1]);
        const rating = [];

        plantsObj = { plant, rarity, rating };
        plants.push(plantsObj);
        line = input.shift();
    }

    while (line != 'Exhibition') {
        line = line.split(': ');
        const comand = line.shift();
        line = line.join('').split(' - ');

        switch (comand) {
            case 'Rate':
                {
                    let plant = line[0];
                    let rate = line[1];
                    const result = plants.find((x) => x.plant == plant);
                    const index = plants.indexOf(result);
                    if (index >= 0) {
                        plants[index].rating.push(rate);
                    } else {
                        console.log('error');
                    }
                }
                break;
            case 'Update':
                {
                    let plant = line[0];
                    let newRarity = line[1];
                    const result = plants.find((x) => x.plant == plant);
                    const index = plants.indexOf(result);
                    if (index >= 0) {
                        plants[index].rarity = newRarity;
                    } else {
                        console.log('error');
                    }
                }
                break;
            case 'Reset':
                {
                    let plant = line[0];
                    const result = plants.find((x) => x.plant == plant);
                    const index = plants.indexOf(result);
                    if (index >= 0) {
                        plants[index].rating = [];
                    } else {
                        console.log('error');
                    }

                }
                break;
        }

        line = input.shift();
    }

    console.log('Plants for the exhibition:');

    plants.forEach(plant => {
        if (plant.rating.length == 0) {
            plant.rating = 0;
            plant.rating = (plant.rating).toFixed(2);
        } else {
            let currentRating = 0;
            for (let index of plant.rating) {
                currentRating += Number(index)
            }

            plant.rating = (currentRating / plant.rating.length).toFixed(2);
        }
        console.log(`- ${plant.plant}; Rarity: ${plant.rarity}; Rating: ${plant.rating}`);
    });

}
plantDiscovery(["3",

"Arnoldii<->4",

"Woodii<->7",

"Welwitschia<->2",

"Rate: Woodii - 10",

"Rate: Welwitschia - 7",

"Rate: Arnoldii - 3",

"Rate: Woodii - 5",

"Update: Woodii - 5",

"Reset: Arnoldii",

"Exhibition"])