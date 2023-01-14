// Input.
let input = ["1 2 3 4 6 6 5 8 9"];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let arr = gets().split(" ").sort().map(Number);
let duplicate = 0;

for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] === arr[i + 1]) {
    duplicate += arr[i];
  }
}

print(duplicate);
