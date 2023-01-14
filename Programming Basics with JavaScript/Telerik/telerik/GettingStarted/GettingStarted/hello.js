// Input.
let input = [
  'John',
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution
let name = gets();
print(`Hello ${name}`);


