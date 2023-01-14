function palindromeIntegers(arrayOfNumbers) {

    let length = arrayOfNumbers.length;

    for (let i = 0; i < length; i++) {
        let numAsString = arrayOfNumbers[i].toString();
        let reversed = numAsString.split('').reverse().join('');

        if (reversed === numAsString) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

}
palindromeIntegers([123, 323, 421, 121])