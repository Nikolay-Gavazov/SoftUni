let input = 'good'

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = input
 
switch (typeof n) {
    case 'number':
    print(n+1);
    break; 
    case 'string':
    let a = Array.from(n)
    let b = a.reverse();
    let c = b.join("");
    print(c);
    break;

}
