let input = [
    [1,2,3,4,3,2,1]
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets();
let reversed = String(arr).split("").reverse().join("");

if (JSON.stringify(arr) == JSON.stringify(reversed)){
    print('yes');
}
if(JSON.stringify(arr) != JSON.stringify(reversed)) {
    print('no');
}
