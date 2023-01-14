// Input.
let input = [7];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let number = +gets();
let result = '';
for (i = 1; i <= number; i++) {
	for (j = i; j < number + i; j++) {
		result += j + ' ';
	}
	print(result);
	result = '';
}
