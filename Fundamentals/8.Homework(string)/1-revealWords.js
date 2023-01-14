function revealWords(words, text) {

    const wordsArr = words.split(', ');
    const textArr = text.split(' ')

    wordsArr.forEach(el => {

        for (let i = 0; i < textArr.length; i++) {
            if (textArr[i] == '*'.repeat(el.length)) {
                textArr[i] = el
            }
        }

    });

    console.log(textArr.join(' '));

}
revealWords('great, learning',

'softuni is ***** place for ******** new programming languages')