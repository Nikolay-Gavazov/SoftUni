let input = ['2', '2'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = gets();
let b = gets();

let sum = Number(a) + Number(b);
let difference = Number(a) - Number(b);
let product = Number(a) * Number(b);
let remainder = Number(a) % Number(b);
let result = Math.pow(a, b);

print(sum);
print(difference);
print(product);
print(remainder);
print(result);