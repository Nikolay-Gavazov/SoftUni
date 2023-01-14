let input = [
    '-0.5',
    '20',
    '200',

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstNumber = Number(gets());
let secondNumber = Number(gets());
let thirdNumber = Number(gets());

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
print(maxNumber);

// Илиииии всичко това може да се реши само с един ред :
// let maxNumber = Math.max(firstNumber, secondNumber, thirdNumber);