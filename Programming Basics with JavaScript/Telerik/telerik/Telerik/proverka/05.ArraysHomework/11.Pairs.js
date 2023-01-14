let input = [
    '6',
    '1 2 3 4 3 6 5 8 3 9'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let magicNumber = Number(gets());
let arr = gets().split(' ').map(Number);

for (let i = 0; i < arr.length - 1; i++) {
    let currentNumber = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
        let nextNumber = arr[j];

        if (nextNumber + currentNumber === magicNumber) {
            print(`${currentNumber}, ${nextNumber}`);
        }
    }
}