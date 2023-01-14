let input = [
'1 2 4 8 7 34 200 2000'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(" ").map(Number);
let isSorted = true;

for (let i = 0; i < arr.length - 1; i++) {

    if (arr[i] > arr[i + 1]) {

        isSorted = false;
        break;
    }
}

isSorted ? print(`Yes`) : print(`No`);