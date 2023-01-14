let input = ['275'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let sum = 0;

while (true) {
    let N = gets();
    if (isNaN(N)) {
        break;
    }
    let a = Number(N[0]);
    let b = Number(N[1]);
    let c = Number(N[2]);

    if (a + c === b) {
        sum += Number(N);
    } else {
        break;

    }
} print(sum);