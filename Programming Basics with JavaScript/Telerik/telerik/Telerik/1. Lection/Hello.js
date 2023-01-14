let input = ['John'];
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let print = this.print || console.log;

print('Hello, ' + gets() + '!'); 
//gets vzima tova vuv skobite