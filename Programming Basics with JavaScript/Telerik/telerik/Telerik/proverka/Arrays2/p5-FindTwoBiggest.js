let input = [
    [8, 2 ,1, 3, 5, 8, 9 ,11, 2, 5]
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

var arr = gets();

let biggest = Math.max.apply(null,arr);


var intArray = arr.map(Number);
var second = intArray.sort(function(a,b){
    return b-a})[1]; 

print(biggest , second);