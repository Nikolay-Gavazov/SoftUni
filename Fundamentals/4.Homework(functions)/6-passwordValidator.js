function passwordValidator(password) {

    let digitCounter = 0;
    let isEnoughLength = false;
    let isLettersAndDigits = true;
    let length = password.length;

    if (password.length > 5 && password.length < 11) {
        isEnoughLength = true;
    }

    for (let i = 0; i < length; i++) {
        let currentChar = password[i].charCodeAt();
        if (currentChar > 47 && currentChar < 58) {
            digitCounter++
        } else if (currentChar >= 65 && currentChar <= 90 || currentChar >= 97 && currentChar <= 122) {

        } else {
            isLettersAndDigits = false;
        }

    }

    if (!isEnoughLength) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!isLettersAndDigits) {
        console.log('Password must consist only of letters and digits');
    }
    if (digitCounter < 2) {
        console.log('Password must have at least 2 digits');
    }

    if (isEnoughLength && isLettersAndDigits && digitCounter > 1) {
        console.log('Password is valid');

    }

}
passwordValidator('Pa$s$s')