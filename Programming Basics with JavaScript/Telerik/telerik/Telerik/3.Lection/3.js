let input = ['3', '3', '5', '2'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();

let count = 0;
let sum = 0;
while (count < N) {
    let nextN = +gets();
    sum += nextN
    count++;
}

let average = sum / N;

print(`avg = ${average.toFixed(2)}`);

