let input = [
    '9',
    'try',
    'google',
    'IT',
    '2',
    'plus',
    '2',
    '=',
    '52',
    '-10'
];


// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


// Solution

let n = +gets();
let number = 0;
let words = '';

let array = [n];

for (i = 0; i < n; i++) {
    array[i] = gets();
}

let he = '';
for (i = 0; i < array.length; i++) {
    he += array[i];
}

//print(he);

for (i = 0; i < array.length; i++) {
    let current = array[i];
    let num = parseInt(current);
    let isNaNed = isNaN(num);



    if (isNaNed === false) {
        let next = array[i + 1];
        isNaNed = isNaN(next);
        if (isNaNed === false) {
            number += +current + parseInt(array[i + 1]);
            i++;
            print(number);
        } else {
            print(+current);
        }
    } else {
        let words1 = array[i + 1];
        isNaNed = isNaN(words1);
        if (isNaNed === true) {
            if (words === '') {
                words = current;
            } else {
                words = words + '-' + current + '-' + array[i + 1];
                i++;
            }
        } else {
            print(current);

        }
    }
}

print(words);
