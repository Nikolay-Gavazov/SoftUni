// Input.
let input = ['-asd'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution
let value = gets();
let result = '';
if (Number(value) != value) {
	let valueLength = value.length;
	for (i = valueLength; i >= 0; i--) {
		result += `${value.charAt(i)}`;
	}
} else {
	result += Number(value) + 1;
}
print(result);
