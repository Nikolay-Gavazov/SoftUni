let input = ['3', '0', '-50', '-100'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let array = '';

for (let i = 0; i < n; i++) {
    array += gets() + ' ';
}
let arr = array.split(' ').map(Number);
arr.pop();
const max1 = Math.max(...arr);
let max_index = '';
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max1) {
        max_index = i;
    }
}
arr.splice(max_index, 1);
const max2 = Math.max(...arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max2) {
        max_index = i;
    }
}
arr.splice(max_index, 1);
const max3 = Math.max(...arr);

print(`${max1}, ${max2} and ${max3}`);
