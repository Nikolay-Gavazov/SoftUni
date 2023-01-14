let input = [55];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let pointsFromTask = +gets();

if (pointsFromTask >= 0 && pointsFromTask <= 50) {
    print('So, what are we going to do now?');
} else if (pointsFromTask >=51 && pointsFromTask <=74) {
    print('You pass');
} else if (pointsFromTask >=75 && pointsFromTask <= 100) {
    print('Great!');

} else {
    print('Whrong score');
}