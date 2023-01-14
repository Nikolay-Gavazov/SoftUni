let input = ['3,-12,0,0,13,5,1,0,-2'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let list = gets().split(',');

let sum = '';
let below = '';
let above = '';
for (let i = 0; i < list.length; i++) {
    sum = Number(sum) + Number(list[i]);
}
let avg = sum / list.length;
for (let i = 0; i < list.length; i++) {
    if (list[i] < avg) {
        below += list[i] + ',';
    } if (list[i] > avg) {
        above += list[i] + ',';
    }
}
print(`avg: ${avg.toFixed(2)}`)
print(`below: ${below.substring(0, below.length - 1)}`);
print(`above: ${above.substring(0, above.length - 1)}`);