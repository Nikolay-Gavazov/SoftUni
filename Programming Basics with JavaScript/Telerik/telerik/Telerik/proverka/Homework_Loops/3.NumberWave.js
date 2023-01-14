// Input.
let input = [
    '6',

];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


// Solution

let n = gets();
let MyN = '1';
let MyM = '';

for (i = 2; i <= n; i++) {
    MyN += ' ' + i;
}


for (i = n - 1; i >= 1; i -= 1) {
    if (i === n - 1) {
        MyM += i;
    } else {
        MyM += ' ' + i;
    }
}
print(MyN, MyM);
