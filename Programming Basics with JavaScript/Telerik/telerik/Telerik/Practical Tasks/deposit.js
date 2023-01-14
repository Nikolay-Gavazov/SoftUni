let input = ['2000'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = gets();
let year1 = Number(n) + Number(n)/ 20;
let year2 = year1 + year1 / 20;
let year3 = year2 + year2 / 20;
print(year1.toFixed(2));
print(year2.toFixed(2));
print(year3.toFixed(2));