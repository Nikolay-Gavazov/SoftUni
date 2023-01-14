// Input.
let input = [
    '8',

];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


// Solution

let n = gets();
let MyN = '1';

for (i = 2; i <= n; i++) {

    if (i % 2 === 0) {
        MyN += ' ' + i;
    }
}

print(MyN);
