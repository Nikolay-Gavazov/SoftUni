function triplesOfLatinLetters(num) {

    let firstLetter = '';
    let secondLetter = '';
    let thirdLetter = '';

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let h = 0; h < num; h++) {
                firstLetter = String.fromCharCode(97 + i);
                secondLetter = String.fromCharCode(97 + j);
                thirdLetter = String.fromCharCode(97 + h);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }

}
triplesOfLatinLetters(3)