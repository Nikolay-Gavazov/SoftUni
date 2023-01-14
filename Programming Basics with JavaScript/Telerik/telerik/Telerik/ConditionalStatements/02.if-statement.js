let input = [
  '25',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let age = +gets();
let under30 = false;

if (age < 30) {
  under30 = true;
}

console.log('Age is under 30: ' + under30);