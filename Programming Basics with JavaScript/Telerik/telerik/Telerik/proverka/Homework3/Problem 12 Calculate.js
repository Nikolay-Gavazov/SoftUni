// Input.
let input = [6, 5];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let n = +gets();
let k = +gets();
let newN = 1;
let newK = 1;

for (i = n; i >= 1; i--) {
	newN *= i;
	if (i <= k) {
		newK *= i;
	}
}
let result = newN / newK;
print(result);
