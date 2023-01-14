function maxNumber(input) {
    let index = 0;
    let currentInput = input[index];
    let num = Number.MIN_SAFE_INTEGER;

    while (currentInput !== 'Stop') {
        currentInput = input[index];
        index++;

        if (currentInput >= num) {
            num = Number(currentInput);
        }
    }
    console.log(num);
}
maxNumber(["45", "-20", "7", "99", "Stop"])