function wordOccurrences(input) {

    let words = {};

    for (let word of input) {
        if (!words.hasOwnProperty(word)) {
            words[word] = 1;
        } else {
            words[word]++;
        }
    }

    let sorted = Object.entries(words)
        .sort((a, b) => b[1] - a[1]);

    sorted.forEach(el => {
        console.log(`${el[0]} -> ${el[1]} times`);
    });

}
wordOccurrences(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])