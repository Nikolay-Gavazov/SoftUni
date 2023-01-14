// Input.
let input = ["2 1 1 2 2 2 2 2"];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let arr = gets().split(" ").map(Number);

let currentSequence = 1;
let maxSequence = 1;
let previousNum = arr[0];

for (let i = 1; i < arr.length; i++) {
  let currentNum = arr[i];

  if (currentNum === previousNum) {
    currentSequence++;
    if (currentSequence > maxSequence) {
      maxSequence = currentSequence;
    }
  } else {
    currentSequence = 1;
  }
  previousNum = currentNum;
}

print(maxSequence);
