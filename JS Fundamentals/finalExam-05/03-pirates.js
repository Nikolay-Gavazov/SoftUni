function pirates(input) {

    let cities = {};
    let array = [];
    let line = input.shift()

    while (line != 'Sail') {
        line = line.split('||');
        const town = line[0];
        const people = Number(line[1]);
        const gold = Number(line[2]);

        const result = array.find((x) => x.town == town);
        const index = array.indexOf(result);

        if (result) {
            array[index].people += people;
            array[index].gold += gold;
        } else {
            cities = { town, people, gold };
            array.push(cities);
        }
        line = input.shift()
    }

    while (line != 'End') {
        line = line.split('=>');
        const comand = line[0];

        switch (comand) {
            case 'Plunder':
                {
                    const town = line[1];
                    const people = Number(line[2]);
                    const gold = Number(line[3]);
                    console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                    const result = array.find((x) => x.town == town);
                    const index = array.indexOf(result);
                    array[index].people -= people;
                    array[index].gold -= gold;
                    if (array[index].people <= 0 || array[index].gold <= 0) {
                        array.splice(index, 1);
                        console.log(`${town} has been wiped off the map!`);
                    }
                }
                break;
            case 'Prosper':
                {
                    const town = line[1];
                    const gold = Number(line[2]);


                    if (gold < 0) {
                        console.log(`Gold added cannot be a negative number!`);
                    } else {
                        const result = array.find((x) => x.town == town);
                        const index = array.indexOf(result);
                        array[index].gold += gold;
                        console.log(`${gold} gold added to the city treasury. ${town} now has ${array[index].gold} gold.`);
                    }
                }
                break;
        }
        line = input.shift()
    }

    if (array.length > 0) {
        console.log(`Ahoy, Captain! There are ${array.length} wealthy settlements to go to:`);
        array.forEach(el => {
            console.log(`${el.town} -> Population: ${el.people} citizens, Gold: ${el.gold} kg`);
        });
    }else{
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }

}
pirates(["Nassau||95000||1000", "Campeche||270000||690", "Sail", "Prosper=>Port Royal=>-200", "Plunder=>Nassau=>94000=>750", "Plunder=>Nassau=>1000=>150", "Plunder=>Campeche=>150000=>690", "End"])