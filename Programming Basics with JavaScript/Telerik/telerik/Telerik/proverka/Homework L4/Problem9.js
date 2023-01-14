// Input.
let input = ["1 2 3 4 3 1 9 4 5 6"];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let arr = gets().split(" ").map(Number);

let startCurrentIndex = 0;
let endCurrentIndex = 0;
// let previousNum = arr[0];
let startSequenceIndex = 0;
let endSequenceIndex = 0;

for (let i = 1; i <= arr.length; i++) {
  if (arr[i - 1] < arr[i]) {
    endCurrentIndex = i;
  } else {
    if (
      endCurrentIndex - startCurrentIndex + 1 >=
      endSequenceIndex - startSequenceIndex + 1
    ) {
      startSequenceIndex = startCurrentIndex;
      endSequenceIndex = endCurrentIndex;
    }
    startCurrentIndex = i;
    endCurrentIndex = i;
  }
}

let output = [];

for (let i = startSequenceIndex; i <= endSequenceIndex; i++) {
  output.push(arr[i]);
}

print(output.join(" "));
