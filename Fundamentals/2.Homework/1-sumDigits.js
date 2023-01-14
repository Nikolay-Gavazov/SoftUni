function sumDigits(input) {

    let numAsString = input.toString();
    let sum = 0;
    let numberOfDigits = numAsString.length;
    for (let i = 0; i < numberOfDigits; i++) {
        let currentDigit = Number(numAsString[i]);
        sum += currentDigit;
    }
    console.log(sum);
}
sumDigits(245678)