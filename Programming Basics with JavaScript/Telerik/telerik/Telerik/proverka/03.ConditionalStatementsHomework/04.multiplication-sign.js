let input = [
    '0',
    '-9',
    '-2',

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let firstNumber = Number(gets());
let secondNumber = Number(gets());
let thirdNumber = Number(gets());

if ( firstNumber === 0 || secondNumber === 0 || thirdNumber === 0) {
    print(0);
} else if (firstNumber < 0 || secondNumber < 0 || thirdNumber < 0) {
    print("-");
} else {
    print("+");
}