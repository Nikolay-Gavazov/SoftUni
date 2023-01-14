let input = ['1','2','3','4','5'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


print(Number(gets()) + Number(gets()) + Number(gets()) + Number(gets()) + Number(gets()));
