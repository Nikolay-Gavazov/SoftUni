let input = ['0,0,0,5,0,3,2,3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let list = gets().split(',').map(Number);
let rem = '';

for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
        if (list[i] === 0) {
            rem = list[i];
            list.splice(i, 1);
            list.push(rem)
        }
    }
}
print(list.toString());