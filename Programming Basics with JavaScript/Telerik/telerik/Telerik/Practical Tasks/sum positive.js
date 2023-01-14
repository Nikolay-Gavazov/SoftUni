let input = ['5'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = gets();
let sum = Number(n)*(Number(n)+1)/2
print(sum);