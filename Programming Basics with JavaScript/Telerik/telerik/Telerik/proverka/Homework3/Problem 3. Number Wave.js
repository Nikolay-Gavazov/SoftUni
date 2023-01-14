// Input.
let input = [6];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let num = +gets();
let result = '';
for (i = 1; i <= num; i++) {
	result += `${i} `;
}
for (j = num - 1; j >= 1; j--) {
	result += `${j} `;
}
print(result);
