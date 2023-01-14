let input = [
    [7,2,-2,1,-5,4,5,-3,1]
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

var arr = gets();

arr = arr.filter(function(v) {
  return v < 0;
}).concat(arr.filter(function(v) {
  return v == 0;
}), arr.filter(function(v) {
  return v > 0;
}));

print(JSON.stringify(arr));