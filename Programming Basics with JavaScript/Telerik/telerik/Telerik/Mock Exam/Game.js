let input = ['111'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = gets();

let a = Number(N[0]);
let b = Number(N[1]);
let c = Number(N[2]);

let D1 = a + b + c;
let D2 = a + (b * c);
let D3 = (a * b) + c;
let D4 = a * b * c;

print(Math.max(D1, D2, D3, D4))