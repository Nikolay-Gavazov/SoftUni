let input1 = '8';
let input2 = '6';
let input3 = '7';

let a = Number(input1);
let b = Number(input2);
let c = Number(input3);

if (c > b && b >= a) {
    console.log(c, b, a); 
} else if (a === b ===c) {
    console.log(a, b, c);
} else if (a >= c && c >= b) {
    console.log(a, c, b);
} else if (b >= c && c >= a) {
    console.log(b, c, a);
} else if (c >= a && a >= b) {
    console.log(c, a, b);
} else if (a >= b && b >= c) {
    console.log(a, b, c);
} else if (b >= a && a >= c) {
    console.log(b, a, c);
}

