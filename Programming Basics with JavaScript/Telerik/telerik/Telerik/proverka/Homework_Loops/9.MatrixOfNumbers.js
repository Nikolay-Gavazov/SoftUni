// Input.
let input = [
    '3',

];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let num = gets();
let counter = num + 1;
let line = '';

for (let i = 1; i <= num; i++) {
    for (let j = i; j <= num * 2 - 1; j++) {
        if (j != counter) {
            line += (j + ' ');
        } else {
            break;
        }
    }
    print(line);
    counter++;
    line = '';
}


