function countStringOccurrences(text, word) {

    let arr = text.split(' ').filter(w => w === word);
    console.log(arr.length);

}
countStringOccurrences('This is a word and it also is a sentence',

'is')