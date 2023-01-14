function stringSubstring(word, text) {

    const textArr = text.split(' ')
    let isFound = false;
    for (const el of textArr) {
        if (el.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            isFound = true;
            break;
        }
    }
    if (!isFound) {
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript',

'JavaScript is the best programming language')