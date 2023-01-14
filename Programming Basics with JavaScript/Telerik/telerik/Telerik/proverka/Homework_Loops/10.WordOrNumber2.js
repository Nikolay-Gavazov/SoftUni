let input = [
    '3',
    '5',
    '1',
    '2'

];


// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


// Solution

let n = +gets();
let number = 0;
let words = '';


for (i = 0; i < n; i++) {
    let current = gets();
    let num = parseInt(current);
    let isNaNed = isNaN(num);

    if (isNaNed === false) {
        number += +current;
    } else {
        if (words === '') {
            words = current;
        } else {
            words = words + '-' + current;
        }
    }

}
if (words === '') {
    print('no words');
} else {
    print(words);

}

print(number);