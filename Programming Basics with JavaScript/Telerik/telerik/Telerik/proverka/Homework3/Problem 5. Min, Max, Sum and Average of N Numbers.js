// Input.
let input = [3, 2, 5, 1];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let num = +gets();
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
let sum = 0;
for (i = 1; i <= num; i++) {
	let value = +gets();
	if (value >= max) {
		max = value;
	}
	if (value <= value) {
		min = value;
	}
	sum += value;
}
let avg = sum / num;
print(`min = ${min}`);
print(`max = ${max}`);
print(`sum = ${sum}`);
print(`avg = ${(Math.floor(avg * 100) / 100).toFixed(2)}`);
