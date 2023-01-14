let input = ['alpha, java, android'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(', ').sort();
let n = arr.length;
let a = '';
let b = '';

for (let i = 0; i < n; i++) {
    a = arr[i];
    for (let j = 1; j < n; j++) {
        b = arr[j];
        if (a === b) {
            
        }
    }
}print(a.length + b.length);

