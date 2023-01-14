let input = ['3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let r = gets();
let perimeter = Math.PI * (2 * r);
let area = Math.PI * (r * r);
print(perimeter.toFixed(2));
print(area.toFixed(2));