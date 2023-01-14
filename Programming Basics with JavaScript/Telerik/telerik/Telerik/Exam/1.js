let input = [3, 1, 9];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let smallBottles = +gets();
let bigBottles = +gets();
let litrestofBig = bigBottles * 5;
let capacity = +gets();
let bigBottlesinTruck = 0;
let output = 0;


if (smallBottles + litrestofBig === capacity) {
    bigBottlesinTruck = capacity - litrestofBig;
    output = bigBottlesinTruck;
    print(output);

} else if (smallBottles + litrestofBig < capacity && bigBottles === 0 ){
    print(smallBottles);
}
else{
    print(-1)
}




// if (smallBottles + litrestofBig < capacity) {
//     print('-1');
// } 
// if (smallBottles + litrestofBig > capacity) {
//     print('-1');
// }