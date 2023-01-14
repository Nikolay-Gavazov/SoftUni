let input = ['10'] ;

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let numbers = ' ';

for (let i = 1; i <= n; i++) {
    numbers += i + ' '
}

print(numbers);

