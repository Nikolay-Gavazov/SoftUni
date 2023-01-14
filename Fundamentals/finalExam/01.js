function passwordValidator(input) {
    let password = input.shift();

    let line = input.shift().split(' ');

    while (line != 'Complete') {
        const comand = line[0];

        switch (comand) {
            case 'Make':
                {
                    let index = Number(line[2]);
                    let letter = password.substring(index, 1 + index);

                    if (line[1] == 'Upper') {
                        let upper = letter.toUpperCase();
                        password = password.replace(letter, upper);
                        console.log(password);
                    } else {
                        let lower = letter.toLowerCase();
                        password = password.replace(letter, lower);
                        console.log(password);
                    }
                }
                break;
            case 'Insert':
                {
                    let index = Number(line[1]);
                    let char = line[2];
                    if (index >= 0 && index < password.length) {
                        let firstHalf = password.substring(index, 0)
                        let secondHalf = password.substring(index);
                        let tempPass = '';
                        tempPass = tempPass.concat(firstHalf, char, secondHalf);
                        password = tempPass;
                        console.log(password);
                    }

                }
                break;
            case 'Replace':
                {
                    let char = line[1];
                    let value = Number(line[2]);
                    let charAsNum = char.charCodeAt();
                    let newCharCode = charAsNum + (value);
                    let newChar = String.fromCharCode(newCharCode);
                    if (password.includes(char)) {
                        while (password.includes(char)) {
                            password = password.replace(char, newChar);
                        }
                        console.log(password);
                    }
                }
                break;
            case 'Validation':
                let upperCount = 0;
                let lowerCount = 0;
                let digitCount = 0;
                {
                    if (password.length < 8) {
                        console.log('Password must be at least 8 characters long!');
                    }
                    for (let char of password) {
                        let charCode = char.charCodeAt();
                        let isDigit = charCode > 47 && charCode < 58;
                        let isUpper = charCode > 64 && charCode < 91;
                        let isUnderscore = charCode == 95;
                        let isLower = charCode > 96 && charCode < 123;

                        if (isDigit || isUpper || isLower || isUnderscore) {
                            
                            
                        } else {
                            console.log('Password must consist only of letters, digits and _!');
                        }
                        if(isDigit){
                            digitCount++;
                        }
                        if(isLower){
                            lowerCount++;
                        }
                        if(isUpper){
                            upperCount++;
                        }
                    }

                    if (upperCount == 0) {
                        console.log('Password must consist at least one uppercase letter!');
                    }

                    if (lowerCount == 0) {
                        console.log('Password must consist at least one lowercase letter!');
                    }
                    if (digitCount == 0) {
                        console.log('Password must consist at least one digit!');
                    }

                }
        }


        line = input.shift().split(' ');
    }
}
passwordValidator(['123456789',
'Insert 3 R',
'Replace 5 15',
'Validation',
'Make Lower 3',
'Complete'])

