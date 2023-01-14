// Input.
let input = ["telerik", "teleric"];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let firstArr = gets().split("");
let secondArr = gets().split("");

if (firstArr.length == secondArr.length) {
  for (let i = 0; i < firstArr.length; i += 1) {
    let firstLetterFirstArr = "";
    let firstLetterSecondArr = "";
    firstLetterFirstArr += firstArr[i];
    firstLetterSecondArr += secondArr[i];

    if (
      firstLetterFirstArr.charCodeAt(0) > firstLetterSecondArr.charCodeAt(0)
    ) {
      print("Second");
      break;
    } else if (
      firstLetterFirstArr.charCodeAt(0) < firstLetterSecondArr.charCodeAt(0)
    ) {
      print("First");
      break;
    } else if (i === firstArr.length - 1) {
      print("Equal");
    }
  }
} else if (firstArr.length < secondArr.length) {
  print("First");
} else if (firstArr.length > secondArr.length) {
  print("Second");
}
