function footballLeague(input) {
    let index = 0;
    let capacity = Number(input[index]);
    index++;

    let fans = Number(input[index]);
    index++;

    let sector = '';

    let a = 0;
    let b = 0;
    let v = 0;
    let g = 0;

    for(let i = 0; i <= fans; i++){
        sector = input[index];
        switch(sector){
            case 'A':
                a++;
                break;
            case 'B':
                b++;
                break;
            case 'V':
                v++;
                break;
            case 'G':
                g++;
                break;
        }
        index++;
    }
    let avgA = (a / fans) * 100;
    let avgB = (b / fans) * 100;
    let avgV = (v / fans) * 100;
    let avgG = (g / fans) * 100;
    let avgFans = (fans / capacity) * 100;

    console.log(`${avgA.toFixed(2)}%`);
    console.log(`${avgB.toFixed(2)}%`);
    console.log(`${avgV.toFixed(2)}%`);
    console.log(`${avgG.toFixed(2)}%`);
    console.log(`${avgFans.toFixed(2)}%`);
}
footballLeague([76,
    10,
    'A',
    'V',
    'V',
    'V',
    'G',
    'B',
    'A',
    'V',
    'B',
    'B',
    ])