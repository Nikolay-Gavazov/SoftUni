let input = [
    '5',
    '6',
    '7',

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstNumber = Number(gets());
let secondNumber = Number(gets());
let thirdNumber = Number(gets());
let maxNumber = 0;
let middleNumber = 0;
let minNumber = 0;

if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
    maxNumber = firstNumber;
    if (secondNumber >= thirdNumber) {
        middleNumber = secondNumber;
        minNumber = thirdNumber;
    } else {
        middleNumber = thirdNumber;
        minNumber = secondNumber;
    }
} else if (firstNumber >= secondNumber && firstNumber <= thirdNumber) {
    maxNumber = thirdNumber;
    minNumber = secondNumber;
    middleNumber = firstNumber;
} else if (firstNumber <= secondNumber && firstNumber >= thirdNumber) {
    maxNumber = secondNumber;
    minNumber = thirdNumber;
    middleNumber = firstNumber;
} else if (firstNumber <= secondNumber && firstNumber <= thirdNumber) {
    minNumber = firstNumber;
    if (thirdNumber >= secondNumber) {
        maxNumber = thirdNumber;
        middleNumber = secondNumber;
    } else {
        maxNumber = secondNumber;
        middleNumber = thirdNumber;
    }
}
print(`${maxNumber} ${middleNumber} ${minNumber}`)
