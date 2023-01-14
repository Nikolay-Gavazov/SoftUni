function wordsUppercase(input) {
    let text = input.toUpperCase();

    const pattern = /(?<word>\w+)/g;
    let matches = text.match(pattern)
    console.log(matches.join(', '));

}
wordsUppercase('Hello')