let input = [
    '1 2 3 4 5 6 5 8 9'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(" ").map(Number);

let repeatingNumber = 0;
let hasRepeatingNumber = false;

for (let i = 0; i < arr.length - 1; i++) {
    let currentNumber = arr[i];

    for(let j = i + 1; j < arr.length; j++) {
        let nextNumber = arr[j];

        if (currentNumber === nextNumber) {
            hasRepeatingNumber = true;
            repeatingNumber = currentNumber;
            break;
        }

    }
}
hasRepeatingNumber ? print(repeatingNumber) : "";