let input = [
    '3',
    [6,4,2],
    [6,4,2]
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
var a1 = gets();
var a2 = gets();

if (JSON.stringify(a1) == JSON.stringify(a2)){
    print('Equal');
}
if(JSON.stringify(a1) != JSON.stringify(a2)) {
    print('Not equal');
}