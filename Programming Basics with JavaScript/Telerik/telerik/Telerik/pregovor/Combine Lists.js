let input = ['2,3,1', '5,2,3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = gets().split(',');
let b = gets().split(',');

let k = '';

for (let i = 0; i < a.length; i++) {

    let output = a[i] + ',' + b[i];
    k += output + ',';

}

print(k.substring(0, k.length - 1));

