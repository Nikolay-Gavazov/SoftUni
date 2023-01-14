let input = ['1,2,3,4,5', '123'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let list = gets().split(',');
let n = +gets();

if(n > list.length) {
    n = n % list.length;
}

for (let i = 0; i < n; i++) {
    list.push(list.shift());
}
print(list.toString());