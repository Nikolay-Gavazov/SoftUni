let a = '-5';
let b = '2';
let c = '-5';
let result = Number(a * b * c);

if (result > 0) {
    console.log('+');
} else if (result < 0) {
    console.log('-');
} else if (result === 0) {
    console.log('0')
}