let input = [
  '100'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = +gets();
let divisor = 2;
let maxDivisor = Math.round(Math.sqrt(number));
let isPrime = true;

while (isPrime && (divisor < maxDivisor)) {
  if (number % divisor === 0) {
    isPrime = false;
  }
  divisor++;
}

console.log(`${number} is prime = ${isPrime}`);
