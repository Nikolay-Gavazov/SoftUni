function bombNumbers(arrayOfNumbers, specialArray) {

    let result = 0;

    let specialNumber = Number(specialArray[0]);
    let power = Number(specialArray[1]);

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] == specialNumber) {
            if (i - power < 0) {
                arrayOfNumbers.splice(0, (power * 2 + 1));
            } else {
                arrayOfNumbers.splice((i - power), (power * 2 + 1));
                i = 0;
            }

        }
    }

    for (let number of arrayOfNumbers) {
        result += number;
    }

    console.log(result);
}
bombNumbers([1, 1, 2, 1, 1, 1,

    2, 1, 1, 1],

    [2, 3])