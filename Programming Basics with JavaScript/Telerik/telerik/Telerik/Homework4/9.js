const input = '1 2 3 4 3 1 9 4 5 6 11';

const array = input.split(' ').map(Number);

let finalArray = [];
let variableArray = [array[0]];
let maxLength = 0;

for (let i = 1; i<array.length; i++) {
    if(array[i] > array[i-1]) {
        variableArray.push(array[i]);
        if(maxLength <= variableArray.length) {
            maxLength = variableArray.length;
            finalArray = [...variableArray];
        }
    }
    else {
        variableArray = [];
        variableArray.push(array[i]);
    }
}

console.log(finalArray);