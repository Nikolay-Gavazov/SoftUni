function mirrorWords(input) {

    const text = input.shift();
    const pattern = /(#|@)(?<pair1>[A-Za-z]{3,})\1{2}(?<pair2>[A-Za-z]{3,})\1/gm;

    const match = text.matchAll(pattern);

    const mirror = [];
    let pairs = 0;

    for (let el of match) {
        pairs++
        let firstWord = el.groups.pair1;
        let secondWord = el.groups.pair2;
        let reverse = el.groups.pair2
            .split('')
            .reverse()
            .join('');
        if (firstWord === reverse) {
            mirror.push(`${firstWord} <=> ${secondWord}`);
        }
    }

    if (pairs == 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${pairs} word pairs found!`);
    }
    if (mirror.length == 0) {
        console.log('No mirror words!');
    } else {
        console.log(`The mirror words are: 
${mirror.join(', ')}`);
    }
}
mirrorWords([ 

    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r' 
    
    ])