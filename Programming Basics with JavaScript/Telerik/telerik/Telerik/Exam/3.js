let input = ['1 2 3 4 5', '1 2 4 4 5 6'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstLine = gets().split(' ');
let secondLine = gets().split(' ');
let n = 0;

if (firstLine.length > secondLine.length) {
    n = firstLine.length;
} if (firstLine.length < secondLine.length) {
    n = secondLine.length;
}

for (let i = 0; i < n; i++) {
    if (firstLine[i] === secondLine[i]) {
        if (secondLine[i] === undefined) {
            secondLine[i] = 'x';
        }
        if (firstLine[i] === undefined) {
            firstLine[i] = 'x';
        }
        print(`+ ${firstLine[i]} ${secondLine[i]}`);
        
        if (firstLine[i] !== secondLine[i]) {
            if (secondLine[i] === undefined) {
                secondLine[i] = 'x';
            }
            if (firstLine[i] === undefined) {
                firstLine[i] = 'x';
            } print(`- ${firstLine[i]} ${secondLine[i]}`);
        }
    }
}
