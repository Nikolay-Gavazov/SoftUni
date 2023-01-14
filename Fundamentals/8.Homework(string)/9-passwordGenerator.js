function passwordGenerator(input) {

    const word = input[2].toUpperCase();
    let concatenate = input[0] + input[1];
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    let index = 0;
    for (let char of concatenate) {
        if (vowel.includes(char)) {
            concatenate = concatenate.replace(char, word[index])
            index++;
        }
        
        if (word[index] === undefined) {
            index = 0;
        }
    }
    let result = concatenate.split('').reverse().join('')
    console.log(`Your generated password is ${result}`);

}
passwordGenerator([

    'ilovepizza',

    'ihatevegetables',

    'orange'

])