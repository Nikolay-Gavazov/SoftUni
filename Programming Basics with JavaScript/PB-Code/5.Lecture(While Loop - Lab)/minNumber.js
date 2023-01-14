function minNumber(input) {
    let index = 0;
    let currentInput = input[index];
    let num = Number.MAX_SAFE_INTEGER;

    while (currentInput !== 'Stop') {
        currentInput = input[index];
        index++;

        if (currentInput <= num) {
            num = Number(currentInput);
        }
    }
    console.log(num);
}
minNumber(["-10", "20", "-30", "Stop"])