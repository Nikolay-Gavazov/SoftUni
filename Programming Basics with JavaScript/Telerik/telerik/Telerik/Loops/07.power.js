let input = [
  '8',
  '3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = +gets();
let power = +gets();
let result = 1;

for (let i = 0; i < power; i++) {
  result = result * number;
}

console.log(`${number} to the power of ${power} = ${result}`);
