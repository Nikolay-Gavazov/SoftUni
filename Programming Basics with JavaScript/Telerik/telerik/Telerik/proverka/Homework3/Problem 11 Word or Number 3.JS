// Input.
let input = [9, 'try', 'google', 'it', 2, 'plus', 2, '=', 52, -10];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let num = +gets();
let resultNum = 0;
let resultString = '';
let lastValue = '';
for (i = 1; i <= num; i++) {
	let value = gets();
	if (Number(value) != value) {
		//string
		if (lastValue == 'str') {
			resultString += `-${value}`;
			if (i == num) {
				print(resultString);
			}
		} else if (lastValue == '') {
			resultString = `${value}`;
		} else if (lastValue == 'num') {
			resultString = `${value}`;
			print(resultNum);
		}
		lastValue = 'str';
	} else if (Number(value) == value) {
		//string
		if (lastValue == 'str') {
			resultNum += value;
			print(resultString);
		} else if (lastValue == '') {
			resultNum += value;
		} else if (lastValue == 'num') {
			resultNum += value;
			if (i == num) {
				print(resultNum);
			}
		}
		lastValue = 'num';
	}
}
