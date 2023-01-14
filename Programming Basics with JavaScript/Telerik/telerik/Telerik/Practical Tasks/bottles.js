let input = ['0',
 '2'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let halfLiterBottle = 0.1;
let literBottle = 0.25;
let earn = (gets() * halfLiterBottle) + (gets() * literBottle);
print(earn.toFixed(2));