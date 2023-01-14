let input = ['3', 
             '4',
             '2',
             '-1'] ;

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
let sum = 0;

for (let i = 1; i <= n; i++) {
    number = Number(gets());
    min = Math.min(min, number);
    max = Math.max(max, number);
    sum += number;
}
print(`min=${min.toFixed(2)}
max=${max.toFixed(2)}
sum=${sum.toFixed(2)}
avg=${(sum/n).toFixed(2)}`);