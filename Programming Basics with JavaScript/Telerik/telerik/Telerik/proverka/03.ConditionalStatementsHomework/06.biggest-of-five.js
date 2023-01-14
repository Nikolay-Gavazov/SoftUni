let input = [
    '-0.5',
    '-10',
    '0',
    '3',
    '-1'

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstNumber = Number(gets());
let secondNumber = Number(gets());
let thirdNumber = Number(gets());
let forthNumber = Number(gets());
let fifthNumber = Number(gets());

let maxNumber = Number.MIN_SAFE_INTEGER;

if (firstNumber > maxNumber) {
    maxNumber = firstNumber;
}
if (secondNumber > maxNumber) {
    maxNumber = secondNumber;
}
if (thirdNumber > maxNumber) {
    maxNumber = thirdNumber;
}
if (forthNumber > maxNumber) {
    maxNumber = forthNumber;
}
if (fifthNumber > maxNumber) {
    maxNumber = fifthNumber;
}

print(maxNumber);

// Илиииии всичко това може да се реши само с един ред :
// let maxNumber = Math.max(firstNumber, secondNumber, thirdNumber, forthNumber, fifthNumber);