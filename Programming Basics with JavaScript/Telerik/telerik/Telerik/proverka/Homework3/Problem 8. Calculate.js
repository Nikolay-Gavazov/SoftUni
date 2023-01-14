// Input.
let input = [3, 2];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

//Solution;

let n = +gets();
let x = +gets();
let newN = 1;
let newX = 1;
let result = 1;

for (i = 1; i <= n; i++) {
	newN *= i;
	newX *= x;
	result += newN / newX;
}
print(result.toFixed(5));
