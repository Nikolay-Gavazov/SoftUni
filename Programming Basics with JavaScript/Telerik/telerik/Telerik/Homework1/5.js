let input = ['2', '5', '-3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = gets();
let b = gets();
let c = gets();
let D = b*b - 4*a*c
let x1 = (-b - Math.sqrt(D)) / (2*a);
let x2 = (-b + Math.sqrt(D)) / (2*a);
print('X1=', x1);
print('X2=', x2);