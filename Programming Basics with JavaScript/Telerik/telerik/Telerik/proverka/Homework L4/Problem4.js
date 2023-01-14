// Input.
let input = ["1 2 4 8 7 34 200 2000"];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let arr = gets().split(" ").map(Number);
let isSorted = true;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i + 1]) {
    isSorted = false;
    print("No");
    break;
  }
}

if (isSorted === true) {
  print("Yes");
}
