// Input.
let input = ['5', '2', '1', '1', '6', '9'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution
let r = +gets();
// let numbers = gets();
// let splits = numbers.split(' ');
let productEven = 1;
let productOdd = 1;
for (i = 0; i < r; i++) {
	if ((i + 1) % 2 !== 0) {
		productOdd *= +gets();
	}
	if ((i + 1) % 2 === 0) {
		productEven *= +gets();
	}
}
if (productEven == productOdd) {
	print(`yes ${productEven}`);
} else {
	print(`no ${productOdd} ${productEven}`);
}
