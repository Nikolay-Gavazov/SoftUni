function emojies(input) {

    const text = input.join('');
    const numberPattern = /[0-9]/gm;
    const letterPattern = /(\*{2}|:{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    const numbers = text.match(numberPattern);
    let threshold = 1;

    for (let num of numbers) {
        threshold *= Number(num);
    }
    let emojies = text.matchAll(letterPattern);
    let emojiCounter = 0;
    let coolEmojies = [];
    for (const emojie of emojies) {
        emojiCounter++;
        let currentEmoji = emojie.groups.emoji;
        let value = 0;
        for (let char of currentEmoji) {
            value += char.charCodeAt();
        }
        if (value >= threshold) {
            coolEmojies.push(emojie[0]);
        }
        emojies = letterPattern.exec(text);
    }
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojiCounter} emojis found in the text. The cool ones are:`);
    if (coolEmojies.length > 0) {
        coolEmojies.forEach(el => {
            console.log(el);
        });
    }



}