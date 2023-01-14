let input = ['8 2 1 3 5 9 11 57 2 5'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let array = gets().split(' ').map(Number);

const max1 = Math.max(...array);

max1_index = '';

for (let i = 0; i < array.length; i++) {
    if (array[i] === max1) {
        max1_index = i;
    }
}
array.splice(max1_index, 1);

const max2 = Math.max(...array);



console.log(max1, max2);