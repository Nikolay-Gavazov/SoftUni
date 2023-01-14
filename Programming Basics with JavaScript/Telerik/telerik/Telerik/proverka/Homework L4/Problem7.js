// Input.
let input = ["2 1 3 1 2 1"];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let arr = gets().split(" ").map(Number);

let previousNum = arr[0];
let isWave = false;

for (let i = 1; i < arr.length - 1; i++) {
  let currentNum = arr[i];
  let nextNum = arr[i + 1];

  if (previousNum > currentNum && currentNum < nextNum) {
    isWave = true;
    previousNum = currentNum;
  } else if (previousNum < currentNum && currentNum > nextNum) {
    isWave = true;
    previousNum = currentNum;
  } else {
    isWave = false;
    break;
  }
}

if (isWave == true) {
  print("Yes");
} else {
  print("No");
}
