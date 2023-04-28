function modernTimesOfHashTag(text) {

    const textArr = text.split(' ')

    textArr.forEach(word => {
        if (word.startsWith('#') && word.length > 1) {
            let haveNumbers = /\d/.test(word);
            if (!haveNumbers) {
                const result = word.substring(1);
                console.log(result);
            }
        }
    });

}
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')