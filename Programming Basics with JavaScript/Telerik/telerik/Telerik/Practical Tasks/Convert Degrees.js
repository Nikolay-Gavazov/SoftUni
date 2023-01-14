let input = ['0 1 2 3 15'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = gets().split(' ').map(Number);
let i = 0

while (true) {
    let temp = Number(N[i]) * 1.8 + 32;
    if (isNaN(temp)) {
        break;
    }
    print(Math.round(temp));
    i++
}


// for (let i = 0; i <= N[i]; i++) {
//     temp = Number(N[i] * 1.8) + 32
//     print(Math.round(temp));
// }