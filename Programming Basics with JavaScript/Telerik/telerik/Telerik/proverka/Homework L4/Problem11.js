// Input.
let input = ["6", "1 2 3 4 3 6 5 8 3 9"];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let sum = +gets();
let arr = gets().split(" ").map(Number);

for (let i = 0; i < arr.length; i += 1) {
  for (let a = arr[i + 1]; a < arr.length; a += 1) {
    if (arr[i] + arr[a] === sum) {
      print(arr[i] + ", " + arr[a]);
    }
  }
}
