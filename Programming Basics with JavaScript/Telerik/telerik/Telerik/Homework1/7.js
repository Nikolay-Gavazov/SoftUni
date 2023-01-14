let input = ['1', '2', '3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = gets();
let b = gets();
let c = gets();
let sum = Math.max(a, b, c) + Math.min(a, b, c);
print(sum);