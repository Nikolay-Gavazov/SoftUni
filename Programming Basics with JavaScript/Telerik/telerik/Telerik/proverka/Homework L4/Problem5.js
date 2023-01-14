let input = ["8 7 8 11 7 7 5 8 10"];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(" ").map(Number);

for (let i = 0; i < arr.length; i += 1) {
  arr.sort((a, b) => a - b);
}

print(arr.pop() + " " + arr.pop());
