let input = ['275',
    '693',
    '110',
    '742'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let sum = 0;

while (true) {
    let currentNumber = gets();
    let firstDigit = Number(currentNumber[0]);
    let secondDigit = Number(currentNumber[1]);
    let thirdDigit = Number(currentNumber[2]);

    if (secondDigit === firstDigit + thirdDigit) {
        sum += Number(currentNumber);
    } else {
        break;
    }
} print(sum)