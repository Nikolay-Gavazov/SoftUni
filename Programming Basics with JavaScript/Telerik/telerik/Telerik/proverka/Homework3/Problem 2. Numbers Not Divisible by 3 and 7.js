// Input.
let input = [21];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let num = +gets();
let result = '';
for (i = 1; i <= num; i++) {
	if (i % 3 == 0 || i % 7 === 0) {
		continue;
	} else {
		result += `${i} `;
	}
}
print(result);
