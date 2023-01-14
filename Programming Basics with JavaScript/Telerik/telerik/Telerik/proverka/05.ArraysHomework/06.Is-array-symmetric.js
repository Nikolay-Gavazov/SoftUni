let input = [
    '1 2 3 4 5 3 2 1'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(' ').map(Number);
let isSymmetric = true;

if (arr.length % 2 === 0) {

    for (let i = 0; i < arr.length / 2; i++) {

        if (arr[i] !== arr[arr.length - 1 - i]) {
            isSymmetric = false;
            break;
        }
    }
} else {
    let firstHalfEndingIndex = (arr.length + 1) / 2;
    let secondHalfStartingIndex = (arr.length - 1) / 2;
    let firstHalftArr = arr.slice(0, firstHalfEndingIndex);
    let seconHalfArr = arr.slice(secondHalfStartingIndex);
    seconHalfArr.reverse();

    for (let i = 0; i < firstHalftArr.length; i++) {
        if (firstHalftArr[i] !== seconHalfArr[i]) {
            isSymmetric = false;
            break;
        }
    }
}
isSymmetric ? print('Yes') : print('No');
