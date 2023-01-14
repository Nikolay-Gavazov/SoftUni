// What is Factorial 
// https://www.youtube.com/watch?v=-FquswEIswk

let input = [
  '4'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let factorial = 1;

while (n > 1) {
  factorial = factorial * n;
  n--;
}

console.log(`factorial: ${factorial}`);
