function sumOfTwoNumbers(input) {
    let a = Number(input[0]);
    let z = Number(input[1]);
    let m = Number(input[2]);

    let counter = 0;
    let isEqual = false
    let sum = 0;
    let x = 0;
    let y = 0;

    for (let i = a; i <= z; i++) {
        for (let j = a; j <= z; j++) {
            counter++;
            sum = i + j
            if (sum === m) {
                x = i;
                y = j;
                isEqual = true;
                break;
            }
        }
        if (isEqual) {
            break;
        }
    }
    if (sum !== m) {
        console.log(`${counter} combinations - neither equals ${m}`);
    } else {
        console.log(`Combination N:${counter} (${x} + ${y} = ${m})`);
    }
}
sumOfTwoNumbers(["88", "888", "1000"])