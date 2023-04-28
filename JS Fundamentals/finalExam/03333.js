function hero(input) {

    let heroes = [];
    let heroObj = {};
    let line = input.shift().split(' ');

    while (line != 'End') {
        const comand = line[0];
        const heroName = line[1];
        const spellName = line[2];
        const result = heroes.find((x) => x.heroName == heroName);
        const index = heroes.indexOf(result);
        switch (comand) {

            case 'Enroll':
                {

                    if (!heroes[index]) {
                        heroObj = { heroName };
                        heroes.push(heroObj);
                    } else {
                        console.log(`${heroName} is already enrolled.`);
                    }
                }
                break;
            case 'Learn':
                {
                    if (heroes[index]) {
                        if (!heroes[index].spellName) {
                            heroes[index].spellName = [];
                            heroes[index].spellName.push(spellName);
                                
                        } else if(heroes[index].spellName.includes(spellName)) {
                            console.log(`${heroName} has already learnt ${spellName}.`);
                        }
                        if(heroes[index].spellName && !heroes[index].spellName.includes(spellName)){
                            heroes[index].spellName.push(spellName);
                        }
                        
                    } else {
                        console.log(`${heroName} doesn't exist.`);
                    }
                }
                break;
            case 'Unlearn':
                {
                    if (heroes[index]) {
                        if (heroes[index].spellName.includes(spellName)) {
                            let i = heroes[index].spellName.indexOf(spellName);
                            heroes[index].spellName.splice(i, 1);
                        } else {
                            console.log(`${heroName} doesn't know ${spellName}.`);
                        }
                    } else {
                        console.log(`${heroName} doesn't exist.`);
                    }
                }
                break;
        }

        line = input.shift().split(' ');

    }

    console.log('Heroes:');
    heroes.forEach(hero => {
        if (!hero.hasOwnProperty('spellName')) {
            console.log(`== ${hero.heroName}:`);

        } else {
            console.log(`== ${hero.heroName}: ${hero.spellName.join(', ')}`);
        }

    });


}



hero(["Enroll Stefan",
"Enroll Peter",
"Enroll Stefan",
"Learn Stefan ItShouldWork",
"Learn John ItShouldNotWork",
"Unlearn George Dispel",
"Unlearn Stefan ItShouldWork",
"End"])
