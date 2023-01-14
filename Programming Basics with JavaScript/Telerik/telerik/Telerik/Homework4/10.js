const input = '1 2 3 4 5 6 4 8 9';

const array = input.split(' ').map(Number);
let repeatingNumber = '';

for (let i = 0; i<array.length; i++) {
    if(repeatingNumber !== '') {
        break;
    } 
    for(let j = i+1; j<array.length; j++) {
        if(array[i] === array[j]) {
            repeatingNumber = array[j];
            break;
        }
    }
}

console.log(repeatingNumber);