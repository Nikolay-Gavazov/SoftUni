// What is a prime number? 
// https://www.youtube.com/watch?v=mIStB5X4U8M

let input = [
  '7',
  '17'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let m = +gets();

for (let i = n; i <= m; i++) {
  let isPrime = true;
  let maxDivisor = Math.round(Math.sqrt(i));

  for (let j = 2; j <= maxDivisor; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${i} is a prime number`);
  }
}
