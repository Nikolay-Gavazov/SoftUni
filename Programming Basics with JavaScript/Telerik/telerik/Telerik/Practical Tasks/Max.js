let input = ['3', '1', '2', '3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
// let numbers = gets();

let largest = '';

for(let i = 0; i < n; i++){
    largest += gets() + ',';
}
let number = largest.substring(0, largest.length - 1)
let c = number.split(',').map(Number);
print(Math.max(...c));
