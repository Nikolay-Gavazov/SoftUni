
// Input.
let input = [
    '5',
    '8',
    '7',
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let a = +gets();
let b = +gets();
let c = +gets();

let first;
let second;
let third;

if (a > b && a >=c){
    first = a.toString();
} else {
    if ( b > c){
        first = b.toString() 
    }else{
        first = c.toString();
    }
}
if ((a >= b && a <= c) || (a <= b && a >= c)){
    second = a.toString();
} else {
    if ((b > c && b < a) || (b < c && b > a)){
        second = b.toString() 
    }else{
        second = c.toString();
    }
}

if (a < b && a < c){
    third = a.toString();
} else {
    if ( b < c){
        third = b.toString() 
    }else{
        third = c.toString();
    }
}

print(first+second+third);