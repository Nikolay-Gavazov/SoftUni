function dungeonestDark(array) {

    let health = 100;
    let coins = 0;
    let room = 0;
    let fixedArray = array.join('|').split('|');
    let input = fixedArray.join(' ').split(' ');
    let index = 0;
    let comand = input[index];
    index++
    let length = input.length;

    for (let i = index; i < length; i++) {
        room++;
        switch (comand) {
            case 'potion':
                comand = input[i];
                i++
                health += Number(comand);
                if (health > 100) {
                    let rest = health - 100;
                    comand -= rest
                    health = 100;
                }
                console.log(`You healed for ${comand} hp.`);
                console.log(`Current health: ${health} hp.`);
                comand = input[i];
                break;
            case 'chest':
                comand = input[i];
                i++
                coins += Number(comand);
                console.log(`You found ${comand} coins.`);
                comand = input[i];
                break;
            default:

                comand = input[i];
                i++
                health -= Number(comand);
                if (health < 1) {
                    console.log(`You died! Killed by ${input[i - 2]}.`);
                    console.log(`Best room: ${room}`);
                    break;
                }
                console.log(`You slayed ${input[i - 2]}.`);
                comand = input[i];
                break;
        }
        if (health < 1) {
            break;
        }

    }

    if (health > 1) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }



}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])