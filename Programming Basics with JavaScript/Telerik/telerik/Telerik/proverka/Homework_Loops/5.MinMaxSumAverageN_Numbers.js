// Input.
let input = [
    '3',
    '2',
    '5',
    '1',

];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


// Solution

let n = +gets();

let numbers = [n];

let sum = 0;
for (i = 0; i <= n - 1; i++) {
    numbers[i] = +gets();
    sum += numbers[i];
}

let min = Math.min.apply(Math, numbers);
let max = Math.max.apply(Math, numbers);
let avg = sum / numbers.length;

print("min = " + min);
print("max = " + max);
print("sum = " + sum)
print("avg = " + avg.toFixed(2));