function passwordReset(input) {

    let password = input.shift();
    let line = input.shift().split(' ');

    while (line != 'Done') {
        const comand = line[0];

        switch (comand) {
            case 'TakeOdd':
                {
                    let tempPass = ''
                    for (let i = 0; i < password.length; i++) {
                        if (i % 2 != 0) {
                            tempPass += password[i];
                        }
                    }
                    password = tempPass;
                    console.log(password);
                }
                break;
            case 'Cut':
                {
                    const index = Number(line[1]);
                    const length = Number(line[2]);
                    const substring = password.substring(index, index + length);
                    password = password.replace(substring, '');
                    console.log(password);
                }
                break;
            case 'Substitute':
                {
                    const substring = line[1];
                    const substitute = line[2];
                    if (!password.includes(substring)) {
                        console.log('Nothing to replace!');
                    } else {
                        while (password.includes(substring)) {
                            password = password.replace(substring, substitute);
                        }
                        console.log(password);
                    }
                }
                break;
        }
        line = input.shift().split(' ');
    }
    console.log(`Your password is: ${password}`);
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",  

"TakeOdd", 

"Cut 15 3", 

"Substitute :: -", 

"Substitute | ^", 

"Done"])