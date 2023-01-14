let input = ['20'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = Number(gets()) * 1.6;
let b = 100 / Number(a);
let m = Number(b) * 4.54;
print(Math.floor(m) + ' ' + 'litres per 100 km');