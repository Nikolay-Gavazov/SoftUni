let input = [
    [1,2,3,4,4,6,5,8,9]
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

var arr = gets();

var sortedArr = arr.sort(); 

var results = [];
for (var i = 0; i < arr.length - 1; i++) {
    if (sortedArr[i + 1] == sortedArr[i]) {
        results.push(sortedArr[i]);
    }
}

console.log(results);