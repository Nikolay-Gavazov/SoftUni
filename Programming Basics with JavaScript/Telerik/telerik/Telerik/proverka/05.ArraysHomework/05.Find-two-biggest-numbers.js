let input = [
'8 2 1 3 5 8 9 11 12 2 5'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(" ").map(Number).sort((a, b) => b-a);

let firstTwoBiggestArr = arr.slice(0, 2);

print(firstTwoBiggestArr.join(" "));