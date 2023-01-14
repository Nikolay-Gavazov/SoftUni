const input = '7 2 -2 1 -5 4 5 -3 1';

const array = input.split(' ').map(Number);

let pArray = [];
let nArray = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        nArray.push(array[i]);
    }
    else if (array[i] > 0) {
        pArray.push(array[i]);
    }
} console.log(nArray + ',' + pArray);
