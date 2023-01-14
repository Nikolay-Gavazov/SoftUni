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
                            heroes[index].spellName = spellName;
                                
                        } else if(heroes[index].spellName == spellName) {
                            console.log(`${heroName} has already learnt ${spellName}.`);
                        }
                        if(heroes[index].spellName != spellName){
                            heroes[index].spellName2 = spellName;
                        }
                    } else {
                        console.log(`${heroName} doesn't exist.`);
                    }
                }
                break;
            case 'Unlearn':
                {
                    if (heroes[index]) {
                        if (heroes[index].spellName == spellName) {
                            delete heroes[index].spellName;
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
        let spells = [];
        for(let key in hero){
            spells.push(hero[key])
        }
        spells.shift();
        if (!hero.hasOwnProperty('spellName')) {
            console.log(`== ${hero.heroName}:`);

        } else {
            console.log(`== ${hero.heroName}: ${spells.join(', ')}`);
        }

    });


}



hero(["Enroll Stefan",
"Learn Stefan ItShouldWork",
"Learn Stefan ItShouldWork",
"Unlearn Stefan NotFound",
"End"])



