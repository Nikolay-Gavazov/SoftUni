let n = '2 1 1 2 3 3 3 3 2';

const array = n.split(' ').map(Number);

let max = 1;

let current_max = 1;

for (let i = 1; i < array.length; i++) {

    if (array[i] - array[i - 1] === 0) {
        current_max = current_max + 1;
        if (current_max > max) {
            max = current_max;
        }
    }
    else {
        if (current_max > max) {
            max = current_max;
        }
        current_max = 1;
    }
}

console.log('Max: ' + max);