function wordsTracker(input) {

    let givenWords = input.shift().split(' ');
    let wordsObj = {};

    givenWords.forEach(el => {
        wordsObj[el] = 0;
    });

    input.forEach(el => {
        if (wordsObj.hasOwnProperty(el)) {
            wordsObj[el]++;
        }
    });

    let sorted = Object.entries(wordsObj)
        .sort((a, b) => b[1] - a[1]);

    sorted.forEach(el => {
        console.log(`${el[0]} - ${el[1]}`);
    });

}
wordsTracker([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task'

])