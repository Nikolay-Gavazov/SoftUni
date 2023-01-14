let input = [
  '6',
  '128',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// read from the input and calculate the factorial
let n = +gets();
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial = factorial * i;
}

console.log(`factorial: ${factorial}`);

// read from the input and calculate the sum of powers of 2 up to the boundary

let boundary = +gets();
let sum = 0;

for (let i = 1; i < boundary; i = i * 2) {
  sum = sum + i;
}

console.log(`sum of powers of 2 up to ${boundary} = ${sum}`);
