let userInput = '1'
let number = Number(userInput);

switch (true) {
    case (number > 0 || number < 0):
        console.log(number + 1); break;
    case (userInput === 'true' || userInput === 'falce'):
        if (userInput === 'true'){
            console.log('falce'); break;
        }else if (userInput === 'falce')
            console.log('true'); break;
    case (userInput !== 'true' || userInput !== 'falce'):
        console.log(userInput + '*'); break;
}