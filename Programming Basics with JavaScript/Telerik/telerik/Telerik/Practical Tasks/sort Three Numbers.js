let input = [5, -2, 3];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +gets();
let b = +gets();
let c = +gets();

if (c > b && b >= a) {
    print(c, b, a); 
} else if (a === b ===c) {
    print(a, b, c);
}else if (a >= c && c >= b) {
    print(a, c, b);
} else if (b >= c && c >= a) {
    print(b, c, a);
} else if (c >= a && a >= b) {
    print(c, a, b);
} else if (a >= b && b >= c) {
    print(a, b, c);
} else if (b >= a && a >= c) {
    print(b, a, c);
}