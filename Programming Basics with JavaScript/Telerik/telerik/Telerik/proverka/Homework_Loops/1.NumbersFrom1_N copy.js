// Input.
let input = [
    '5',

];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


// Solution

let n = gets();
let MyN = '1';

for (i = 2; i <= n; i++) {
    MyN += ' ' + i;
}

print(MyN);
