// Input.
let input = [
    '4',
    '-1',
    '6',
    '8',
    '8',

];


// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


// Solution

let n = +gets();

const numbers = [n];


for (i = 0; i <= n - 1; i++) {
    numbers[i] = +gets();
}


let output = '';

for (i = 0; i < numbers.length; i++) {
    if (i === 0) {
        output += numbers[i];
    } else {
        if (numbers[i - 1] > numbers[i]) {
            output += '>' + numbers[i];
        } else if (numbers[i - 1] < numbers[i]) {
            output += '<' + numbers[i];
        } else if (numbers[i - 1] === numbers[i]) {
            output += '=' + numbers[i];
        }
    }
}

print(output);

