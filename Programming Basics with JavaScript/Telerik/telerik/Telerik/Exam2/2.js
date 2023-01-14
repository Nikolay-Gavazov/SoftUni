let input = ['5 3 2 3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = gets().split(' ');
let T = a[0];
let N = a[1];
let S = a[2];
let P = a[3];

let output = (N / (S * P)) * T;

print(Math.round(Number(output)));