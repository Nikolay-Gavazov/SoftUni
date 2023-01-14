let input = [
  '11',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let sum = 0;

for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    continue;
  }

  sum = sum + i;
}

console.log(`Sum of odd numbers from 1 to ${n} = ${sum}`);
