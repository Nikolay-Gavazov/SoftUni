let input = [
    '5',
    '6'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = Number(gets());
let b = Number(gets());
let greaterNumber = 0;

if ( a > b) {
    greaterNumber = a;
    a = b;
    b = greaterNumber;
}
print(`${a} ${b}`);