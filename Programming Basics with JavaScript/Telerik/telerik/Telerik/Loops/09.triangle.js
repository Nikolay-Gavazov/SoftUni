let input = [
  '9',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();

for (let row = 1; row <= n; row++) {
  let line = '';
  for (let column = 1; column <= row; column++) {
    line = line + '*';
  }
  console.log(line);
}
