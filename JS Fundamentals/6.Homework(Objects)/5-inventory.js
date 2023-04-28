function inventory(data) {

    let heroes = [];

    data.forEach(element => {
        let [name, level, items] = element.split(' / ');
        heroes.push({ name, level, items });
    });
    heroes.sort((a, b) => a.level - b.level)

    for (let el of heroes) {
        console.log(`Hero: ${el.name}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items}`);
    }

}
inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])