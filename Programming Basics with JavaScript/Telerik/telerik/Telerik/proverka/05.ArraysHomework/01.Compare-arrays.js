let input = [
    '3',
    '1',
    '2',
    '3',
    '1',
    '2',
    '3'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstArr = [];
let secondArr = [];

let elementsNumber = Number(gets());

for (let i = 1; i <= elementsNumber * 2; i++) {
    let currentElement = Number(gets());

    if (i <= elementsNumber) {
        firstArr.push(currentElement);
    } else {
        secondArr.push(currentElement);
    }
}

let areEqual = true;

for (let i = 0; i < elementsNumber; i++) {

    if (firstArr[i] !== secondArr[i]) {
        areEqual = false;
        break;
    }
}

areEqual ? print(`Equal`) : print(`Not equal`);
