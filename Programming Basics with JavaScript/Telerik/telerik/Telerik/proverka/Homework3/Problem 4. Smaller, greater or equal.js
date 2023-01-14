// Input.
let input = [6, 2, 5, 1, 1, 0, -1];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution
let num = +gets();
let value = +gets();
let result = `${value}`;
for (i = 1; i < num; i++) {
	let newValue = +gets();
	if (newValue > value) {
		result += `<${newValue}`;
	} else if (newValue === value) {
		result += `=${newValue}`;
	} else {
		result += `>${newValue}`;
	}
	value = newValue;
}
print(result);
