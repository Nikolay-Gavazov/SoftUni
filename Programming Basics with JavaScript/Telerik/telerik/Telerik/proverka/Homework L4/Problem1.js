// Input.
let input = ["3", "1", "2", "3", "1", "2", "3"];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let n = +gets();
let firstArr = [];
let secondArr = [];
isEqual = true;

for (let i = 1; i <= n; i += 1) {
  firstArr.push(+input[i]);
}

for (let i = 4; i < input.length; i += 1) {
  secondArr.push(+input[i]);
}

if (firstArr.length === secondArr.length) {
  for (let i = 0; i < firstArr.length; i += 1) {
    if (firstArr[i] !== secondArr[i] && isEqual === true) {
      isEqual = false;
      break;
    } else {
      isEqual = true;
    }
  }
} else {
  isEqual = false;
}

if (isEqual === true) {
  print("Equal");
} else {
  print("Not equal");
}
