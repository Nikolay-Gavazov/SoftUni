function heroes(input) {

    const n = Number(input.shift());
    const heroes = [];
    let heroObj = {};
    let line = input.shift();

    for (let i = 0; i < n; i++) {
        line = line.split(' ');
        const heroName = line[0];
        const hp = Number(line[1]);
        const mp = Number(line[2]);


        heroObj = { heroName, hp, mp };
        heroes.push(heroObj);

        line = input.shift();
    }

    while (line != 'End') {
        line = line.split(' - ');
        const comand = line[0];
        const heroName = line[1];
        const amount = Number(line[2]);
        const result = heroes.find((x) => x.heroName == heroName);
        const index = heroes.indexOf(result);
        switch (comand) {

            case 'CastSpell':
                {
                    const mpNeeded = Number(line[2]);
                    const spellName = line[3];
                    if (heroes[index].mp >= mpNeeded) {
                        heroes[index].mp -= mpNeeded;
                        console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[index].mp} MP!`);
                    } else {
                        console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                    }
                }
                break;
            case 'TakeDamage':
                {
                    const damage = Number(line[2]);
                    const attacker = line[3];
                    heroes[index].hp -= damage;
                    if (heroes[index].hp > 0) {
                        console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[index].hp} HP left!`);
                    } else {
                        heroes.splice(index, 1);
                        console.log(`${heroName} has been killed by ${attacker}!`);
                    }
                }
                break;
            case 'Recharge':
                {
                    const recoveredAmount = 200 - heroes[index].mp;
                    heroes[index].mp += amount;
                    if (heroes[index].mp > 200) {
                        heroes[index].mp = 200;
                        console.log(`${heroName} recharged for ${recoveredAmount} MP!`);
                    } else {
                        console.log(`${heroName} recharged for ${amount} MP!`);
                    }
                }
                break;
            case 'Heal':
                {
                    const recoveredAmount = 100 - heroes[index].hp;
                    heroes[index].hp += amount;
                    if (heroes[index].hp > 100) {
                        heroes[index].hp = 100
                        console.log(`${heroName} healed for ${recoveredAmount} HP!`);
                    } else {
                        console.log(`${heroName} healed for ${amount} HP!`);
                    }
                }
                break;
        }

        line = input.shift();
    }
    heroes.forEach(el => {
        console.log(`${el.heroName}
  HP: ${el.hp}
  MP: ${el.mp}`);
    });
}
heroes([
    '2', 

    'Solmyr 85 120', 
    
    'Kyrre 99 50',
    
    'Heal - Solmyr - 10', 
    
    'Recharge - Solmyr - 50', 
    
    'TakeDamage - Kyrre - 66 - Orc',

    'CastSpell - Kyrre - 15 - ViewEarth', 
    
    'End'
] )