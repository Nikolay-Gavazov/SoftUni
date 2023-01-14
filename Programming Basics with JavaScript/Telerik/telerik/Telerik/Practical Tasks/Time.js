let input = ['0', '2', '6', '0'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let d = gets() * 24 * 60 * 60;
let h = gets() * 60 * 60;
let m = gets() * 60;
let s = gets();

let sum = Number(d) + Number(h) + Number(m) + Number(s);
print(sum);