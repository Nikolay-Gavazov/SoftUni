// Input.
let input = [
    '5',
    '-5',
    '0',

];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let a = +gets();
let b = +gets();
let c = +gets();

let result = ''

if (a > 0 && b > 0 && c > 0 ){
    result = '+'
}else if (((a<0 && b<0) || ( a<0 && c<0) || (b<0 && c<0)) && (a > 0 || b > 0 || c > 0) ){
    result = '+'
}else if (((a>0 && b>0) || ( a>0 && c>0) || (b>0 && c>0)) && (a < 0 || b < 0 || c < 0) ){
    result = '-'
}else if( a === 0 || b === 0 || c === 0){
    result = '0'
}else if ( a < 0 || b < 0 || c < 0){
    result = '-'
}

print(result);