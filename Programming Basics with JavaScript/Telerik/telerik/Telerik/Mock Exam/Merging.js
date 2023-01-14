let input = ['4',
    '12',
    '23',
    '34',
    '45'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = Number(gets());
let output1 = '';
let output2 = '';
let previousNum = Number(gets());
for (let i = 1; i < N; i++) {
    let a = Math.floor(previousNum / 10) % 10;
    let b = previousNum % 10;

    let num = gets();

    let c = Math.floor(num / 10) % 10;
    let d = num % 10;

    let merged = '' + b + c;
    let squashed = '' + a + ((b + c) % 10) + d;
    output1 += merged + ' ';
    output2 += squashed + ' ';
    previousNum = num;
}
print(output1.trim());
print(output2.trim());