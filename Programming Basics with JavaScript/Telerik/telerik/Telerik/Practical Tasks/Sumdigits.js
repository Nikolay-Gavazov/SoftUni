let input = ['2346'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = gets();
let a = N.substring(0, 1);
let b = N.substring(1, 2);
let c = N.substring(2, 3);
let d = N.substring(3);
let sum = Number(a) + Number(b) + Number(c) + Number(d);

print(sum);
