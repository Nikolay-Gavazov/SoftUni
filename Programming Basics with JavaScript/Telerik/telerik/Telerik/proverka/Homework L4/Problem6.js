// Input.
let input = ["3 4 5 4 3"];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let arr = gets().split(" ").map(Number);
let isSymmetric = true;
let arrLengthCeil = Math.ceil(arr.length / 2);

for (let i = 0; i < arrLengthCeil; i++) {
  if (arr[arr.length - 1 - i] !== arr[i]) {
    isSymmetric = false;
    break;
  }
}

if (isSymmetric == true) {
  print("Yes");
} else {
  print("No");
}
