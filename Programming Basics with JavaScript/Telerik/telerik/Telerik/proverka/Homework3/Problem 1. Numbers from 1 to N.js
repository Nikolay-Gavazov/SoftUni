// Input.
let input = [5];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let num = +gets();
let result = '';
for (i = 1; i <= num; i++) {
	result += `${i} `;
}
print(result);
