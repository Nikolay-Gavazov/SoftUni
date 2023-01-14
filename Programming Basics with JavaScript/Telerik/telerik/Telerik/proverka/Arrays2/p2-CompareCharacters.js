let input = [
    'ownede',
    'owned'
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a1 = gets();
let a2 = gets();
if ((a1.localeCompare(a2)) === 0){
    print('Equal');
} else if ((a1.localeCompare(a2)) > 0 ){
    print('Second')
} else if ((a1.localeCompare(a2)) < 0 ){
    print('First')
}