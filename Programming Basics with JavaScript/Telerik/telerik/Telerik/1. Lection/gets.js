let input = ['Nikolay Gavazov', 'Sofia Mladost', '28'];
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let print = this.print || console.log;

let name = gets();
let adress = gets();
let age = Number(gets());

print(name);
print(adress);
print(age);