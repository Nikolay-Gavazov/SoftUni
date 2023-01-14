let input = ['74'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let bill = gets();
let tip = Number(bill) / 10;
let sum = Number(bill) + Number(tip); 
print(sum.toFixed(0));