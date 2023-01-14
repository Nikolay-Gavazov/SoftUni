let input = ['3',
    '2,4,6',
    '6,4,2'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();

let output = true;

const arr1 = gets().split(',').map(Number);
const arr2 = gets().split(',').map(Number);

for (let i = 0; i < N; i++)
    if (arr1[i] === arr2[i]) {
        output = true;
    } else
        output = false;

if (output === true) {
    console.log('Equal');
} else
    console.log('Not equal');
