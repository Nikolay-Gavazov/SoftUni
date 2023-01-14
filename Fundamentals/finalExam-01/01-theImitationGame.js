function theImitationGame(input) {

    let word = input.shift().split('');

    let message = input.shift().split('|');

    while (message != 'Decode') {
        let comand = message[0]
        switch (comand) {
            case 'Move':
                let n = Number(message[1]);
                for (let i = 0; i < n; i++) {
                    let currentEl = word.shift()
                    word.push(currentEl);
                }
                break;
            case 'Insert':
                let index = Number(message[1]);
                let value = message[2];
                word.splice(index, 0, value);
                break;
            case 'ChangeAll':
                let char = message[1];
                let replacement = message[2];
                while(word.includes(char)){
                    
                    let index = word.indexOf(char);
                    word[index] = replacement;
                }
                break;
        }


        message = input.shift().split('|');
    }

    console.log(`The decrypted message is: ${word.join('')}`);

}
theImitationGame([

    'zzHe',
    
    'ChangeAll|z|l',
    
    'Insert|2|o',
    
    'Move|3',
    
    'Decode'
    
    ])