let n = '6';
let N = Number(n);
const input = '1 2 3 4 3 6 5 8 3 9';

const num = input.split(' ').map(Number);

let output = [];

for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
        if (num[i] + num[j] === N) {
            console.log(num[i] + ',' + num[j]);

        }
    }
}