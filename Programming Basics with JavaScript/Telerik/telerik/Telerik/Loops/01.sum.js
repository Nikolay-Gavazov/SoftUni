let input = [
  '5'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = +gets();
let sum = 0;
let i = 1;

while (i <= number) {
  sum = sum + i;
  i++;
}

console.log(`Sum of all numbers from 1 to ${number} = ${sum}`);
