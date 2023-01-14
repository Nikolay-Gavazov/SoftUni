let input = [
  '13',
  '17'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let first = +gets();
let second = +gets();

if (first === second) {
  console.log('This two numbers are equal.');
} else {
  if (first > second) {
    console.log('The first number is greater than the second.');
  } else {
    console.log('The second number is greater than the first.');
  }
}