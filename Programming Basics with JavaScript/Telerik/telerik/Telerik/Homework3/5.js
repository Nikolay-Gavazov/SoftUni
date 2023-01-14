let N = 3;
let n = [5, 2, 1];
let i = 0;
let sum = 0;
while (i < N) {
    let nextN = n[i];
    sum += nextN
    i++;
}
let average = sum / N;

console.log(`min = ${Math.min(...n)}`);
console.log(`max = ${Math.max(...n)}`);
console.log(`sum = ${sum}`);
console.log(`avg = ${average.toFixed(2)}`);