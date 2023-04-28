function emojies(input) {

    const text = input.join('');
    const numbers = text.match(/[0-9]/g);
    let threshold = 1;
    const emojies = text.matchAll(/(\*{2}|:{2})(?<emoji>[A-Z][a-z]{2,})\1/g);
    let emojiCounter = 0;
    let coolEmojies = [];

    for (let num of numbers) {
        threshold *= Number(num);
    }

    for (const emojie of emojies) {
        emojiCounter++;
        let currentEmoji = emojie.groups.emoji;
        let value = 0;
        for (let i = 0; i < currentEmoji.length; i++) {
            value += currentEmoji.charCodeAt(i);
        }
        if (value >= threshold) {
            coolEmojies.push(emojie[0]);
        }
    }
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojiCounter} emojis found in the text. The cool ones are:`);
    if (coolEmojies.length > 0) {
        coolEmojies.forEach(el => {
            console.log(el);
        });
    }

}
emojies(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])