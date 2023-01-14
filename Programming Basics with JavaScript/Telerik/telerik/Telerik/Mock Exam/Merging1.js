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
let previousNum = gets();
for (let i = 1; i < N; i++) {
    let a = previousNum[0];
    let b = previousNum[1];

    let num = gets();

    let c = num[0];
    let d = num[1];

    let merged = b + c;
    let squashed = a + ((Number(b) + Number(c)) % 10) + d;
    output1 += merged + ' ';
    output2 += squashed + ' ';
    previousNum = num;
}
print(output1.trim());
print(output2.trim());