function hardWords(input) {

    let words = input.pop().sort((a, b) => a.length - b.length);
    let text = input.toString().split(' ');

    let outputText = input.toString().split(' ').join(' ');

    text.forEach(el => {
        for(let word of words){
        if (el.startsWith('_') && el.endsWith('_')) {
            if (el.length == word.length) {
    	        outputText = outputText.replace(el, word);
            }
        }
        if (el.startsWith('_') && !el.endsWith('_')) {
            if (el.length - 1 == word.length) {
                let newEl = el.substring(0, el.length - 1);
                outputText = outputText.replace(newEl, word);
            }
        }
    }
    });
    console.log(outputText);
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',

    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])