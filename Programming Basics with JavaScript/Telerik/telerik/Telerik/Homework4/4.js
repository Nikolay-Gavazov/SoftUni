const input = '7 8 9 10 11 12 11 13 9';

const array = input.split(' ').map(Number);

for (let i = 0; i < array.length; i++) {
    if (array[i] >= array[i + 1]) {
        output = false;
        break;
    } else if (array[i] < array[i + 1])
        output = true;
}
if (output === true) {
    console.log('Yes');
} else
    console.log('No');
