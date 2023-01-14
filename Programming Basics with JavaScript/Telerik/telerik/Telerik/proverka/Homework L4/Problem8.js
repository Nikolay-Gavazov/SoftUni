// Input.
let input = ["7 2 -2 1 -5 4 5 -3 1"];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let arr = gets().split(" ").map(Number);
let positive = [];
let negative = [];

for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] >= 0) {
    positive.push(arr[i]);
  } else {
    negative.push(arr[i]);
  }
}

print(negative.join(" ") + " " + positive.join(" "));
