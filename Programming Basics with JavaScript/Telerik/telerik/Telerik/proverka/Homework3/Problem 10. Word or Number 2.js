// Input.
let input = [5, 1, 'go', 1, 'there', 5];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution
let num = +gets();
let resultString = '';
let resultNum = 0;
for (i = 1; i <= num; i++) {
	let value = gets();
	if (Number(value) != value) {
		if (resultString == '') {
			resultString += `${value}`;
		} else {
			resultString += `-${value}`;
		}
	} else {
		resultNum += Number(value);
	}
}
if (resultString == '') {
	print('no words');
} else {
	print(resultString);
}
print(resultNum);
