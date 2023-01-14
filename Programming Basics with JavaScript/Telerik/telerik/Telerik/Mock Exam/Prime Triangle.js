let input = ['10'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = gets();
let output = '';

for (let i = 1; i <= N; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    } if (isPrime) {
        output += '1';
        print(output);
    } else {
        output += '0'
    }

}