let input = ['1020340567.89'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = gets();

while (true) {
    let sum = 0;
    for (let i = 0; i < N.length; i++) {
        let currentDigit = Number(N[i]);
        if (isNaN(currentDigit)) {
            continue;
        }
        sum += currentDigit;
    }
    N = String(sum);
    if (sum <= 9) {
        break;
    }

} print(N);