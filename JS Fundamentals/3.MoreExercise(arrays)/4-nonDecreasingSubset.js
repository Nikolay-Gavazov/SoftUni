function nonDecreasingSubset(arrayOfNumbers) {

    let resultArray = [arrayOfNumbers[0]];
    let length = arrayOfNumbers.length;

    for (let i = 0; i < length; i++) {
        if (arrayOfNumbers[i] <= arrayOfNumbers[i + 1]) {
            if (resultArray[resultArray.length - 1] <= arrayOfNumbers[i + 1]) {
                resultArray.push(arrayOfNumbers[i + 1]);
            }
        }
    }
    console.log(resultArray.join(' '));

}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])