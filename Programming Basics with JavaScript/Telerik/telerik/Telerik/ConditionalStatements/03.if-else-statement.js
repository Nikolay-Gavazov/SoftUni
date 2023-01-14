let input = [
  '7',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = +gets();

if (number % 2 === 0) {
  console.log('This number is even.');
} else {
  console.log('This number is odd.');
}