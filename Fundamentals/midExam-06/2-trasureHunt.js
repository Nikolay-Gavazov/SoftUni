function treasureHunt(input) {

    let treasureChest = input.shift().split('|');
    let line = input.shift().split(' ');
    let stolenItems = [];

    while (line != 'Yohoho!') {
        let comand = line[0];

        switch (comand) {
            case 'Loot':
                for (let i = 1; i < line.length; i++) {
                    let index = treasureChest.indexOf(line[i]);
                    if (index == -1) {
                        treasureChest.unshift(line[i]);
                    }
                }
                break;
            case 'Drop':
                let dropIndex = Number(line[1]);
                if (treasureChest[dropIndex] || dropIndex == 0) {
                    let currentElement = treasureChest.splice(dropIndex, 1);
                    currentElement = currentElement.join('');
                    treasureChest.push(currentElement);
                }
                break;
            case 'Steal':
                let stealIndex = Number(line[1]);
                
                if(stealIndex > treasureChest.length){
                    stolenItems = treasureChest.splice(0);
                console.log(stolenItems.join(', '));
                }else {
                    let length = treasureChest.length;
                stolenItems = treasureChest.splice(length - (stealIndex));
                console.log(stolenItems.join(', '));
                }
                break;
        }
        line = input.shift().split(' ');
    }

    if (treasureChest.length > 0) {
        let avgGain = 0;
        for (let i = 0; i < treasureChest.length; i++) {
            avgGain += treasureChest[i].length;
        }
        avgGain /= treasureChest.length
        console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }

}
treasureHunt(['Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 1',
    'Yohoho!'])