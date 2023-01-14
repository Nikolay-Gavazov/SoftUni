const input = '7 3 5 2 8 4'

const array = input.split(' ').map(Number);

let isWave = '';

for (let i = 1; i < array.length - 1; i++) {
    if (array[i - 1] > array[i] && array[i] < array[i + 1]) {
        isWave = true;
    } else if (array[i - 1] < array[i] && array[i] > array[i + 1]) {
        isWave = true;
    } else {
        isWave = false;
        break;
    }
} if (isWave === true) {
    console.log('Yes');
} else
    console.log('No');
