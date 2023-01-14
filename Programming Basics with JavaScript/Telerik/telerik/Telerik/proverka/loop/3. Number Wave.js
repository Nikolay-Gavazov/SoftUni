let input = ['7'] ;

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let firstString = '' ;
let secondString = '';


for (i = 1; i <= n; i++) {
    firstString += i + ' ';
};

for (j = n - 1 ; j >= 1; j--) {
    secondString += j + ' '
}

print(`${firstString}${secondString}`) ; 
