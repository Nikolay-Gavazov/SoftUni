// Input.
let input = [
    '4',
    '3'
    
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let first = +gets();
let second = +gets();


if (first > second){
    print(second + ' ' + first);
    } else {
        print(first + ' ' + second);
    }
        