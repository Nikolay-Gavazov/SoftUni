let input = ['b', '8'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let L = gets();
let R = +gets();

if (L === 'a') {
    L = true;
} else if (L === 'b') {
    L = false;
} else if (L === 'c') {
    L = true;
} else if (L === 'd') {
    L = false;
} else if (L === 'e') {
    L = true;
} else if (L === 'f') {
    L = false;
} else if (L === 'g') {
    L = true;
} else if (L === 'h') {
    L = false
}

if (R % 2 !== 0) {
    R = true;
} else {
    R = false;
}

if (L && R) {
    print('dark');
} else if (!L && R) {
    print('light');
} else if (L && !R) {
    print('light');
} else if(!L && !R) {
    print('dark');

}