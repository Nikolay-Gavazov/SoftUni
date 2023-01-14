let input = ['3', '4', '11'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


print(Number(gets()) + Number(gets()) + Number(gets()));
