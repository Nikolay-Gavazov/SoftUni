let input = ['3','5','4','6'] 

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let a = Number(gets());
let result = a;

for (i = 2; i <= n; i++) {
    let b = Number(gets());
    if (b > a){
       result += ' < ' + b;
       a = b;
    } else if (b < a) {
        result += ' > ' + b;
        a = b;
    } else if (b = a) {
        result += ' = ' + b;
    }
}

print(result);
