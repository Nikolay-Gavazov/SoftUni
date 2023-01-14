function pianist(input) {

    let n = Number(input.shift());
    let line = input.shift().split('|');
    let array = [];
    let pieces = {};

    for (let i = 0; i < n; i++) {
        let piece = line[0];
        let composer = line[1];
        let key = line[2];

        pieces = { piece, composer, key }
        array.push(pieces);
        line = input.shift().split('|');
    }


    while (line != 'Stop') {
        let comand = line[0];

        switch (comand) {
            case 'Add':
                {
                    const piece = line[1];
                    const composer = line[2];
                    const key = line[3];

                    const result = array.find((x) => x.piece == piece);

                    if (result) {
                        console.log(`${piece} is already in the collection!`);
                    } else {
                        pieces = { piece, composer, key }
                        array.push(pieces);
                        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                    }
                }
                break;
            case 'Remove':
                {
                    const piece = line[1];
                    const result = array.find((x) => x.piece == piece);
                    let index = array.indexOf(result);
                    if (result) {
                        array.splice(index, 1);
                        console.log(`Successfully removed ${piece}!`);
                    } else {
                        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    }
                }
                break;
            case 'ChangeKey':
                {
                    const piece = line[1];
                    const newKey = line[2];

                    const result = array.find((x) => x.piece == piece);
                    const index = array.indexOf(result);

                    if (result) {
                        array[index].key = newKey;
                        console.log(`Changed the key of ${piece} to ${newKey}!`);
                    } else {
                        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    }
                }
                break;
        }
        line = input.shift().split('|');
    }

    array.forEach(el => {
        console.log(`${el.piece} -> Composer: ${el.composer}, Key: ${el.key}`);
    });

}
pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  )