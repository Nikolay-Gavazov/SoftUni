let input = [
    [2,1,1,2,3,3,2,2,2,1]
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

var arr = gets();

var counter = 0;
var longestSequence = 0;
var value = 0;

for (var i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] == arr[i + 1]) {
         counter++;
        if (longestSequence < counter) {
            longestSequence = counter;
            value = arr[i];
        }
        }
         else {
            counter = 0;
            }
        }
        if (longestSequence == 0) {
            console.log("No sequence");
        }
        else {
            console.log((longestSequence + 1));
        }