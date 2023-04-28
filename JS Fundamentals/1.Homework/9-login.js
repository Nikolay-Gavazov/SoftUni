function login(input) {

    let notCorrectTry = 0;

    let array = input;

    let currentWord = '';

    let account = input[0];
    let reverseAccount = account.split('').reverse().join('');

    for (let i = 1; i <= array.length; i++) {
        currentWord = input[i];
        notCorrectTry++;

        if (notCorrectTry > 3 && currentWord !== reverseAccount) {
            console.log(`User ${account} blocked!`);
            break;
        }

        if (currentWord === reverseAccount) {
            console.log(`User ${account} logged in.`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
        }
        

    }

}
login(['Acer','login','go','let me in','recA'])