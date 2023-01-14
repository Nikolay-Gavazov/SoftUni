// Input.
let input = [
    '3',
    '2',

];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


// Solution

let n = +gets();
let x = +gets();


let result = 1;
let ifac = 1;

for (i = 1; i <= n; i++) {
    for (j = i; j >= 1; j--) {
        ifac *= j;
    }
    result += (ifac / Math.pow(x, i));
}

print(result);
