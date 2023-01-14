let input = [
'2 1 3 1 2 1'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

//first > second < third > fourth < fifth > ...

let arr = gets().split(" ").map(Number);
let isInWave = true;

for ( let i = 1; i < arr.length - 1; i++) {

    if ( i % 2 !== 0) {

        if (!(arr[i] < arr[i - 1] && arr[i] < arr[i + 1])) {
            isInWave = false;
            break;
        }


    } else {

        if (!(arr[i] > arr[i - 1] && arr[i] > arr[i + 1])) {
            isInWave = false;
            break;
        }

    }

  
}
isInWave ? print(`Yes`) : print('No');