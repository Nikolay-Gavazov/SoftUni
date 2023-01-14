let input = [
'7 2 -2 1 -5 4 5 -3 1'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(" ").map(Number);

let negativeArr = [];
let positiveArr = [];

for(let i = 0; i < arr.length; i++) {
    let currentEl = arr[i];
    if (currentEl < 0){
        negativeArr.push(currentEl);
    } else {
        positiveArr.push(currentEl);
    }
}
let output = negativeArr.concat(positiveArr);

print(output.join(" "));