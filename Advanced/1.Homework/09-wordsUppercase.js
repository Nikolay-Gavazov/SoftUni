function wordsUppercase(input) {
    let text = input.toUpperCase();

    let matches = text.match(/(?<word>\w+)/g)
    console.log(matches.join(', '));

}
wordsUppercase('Hello')