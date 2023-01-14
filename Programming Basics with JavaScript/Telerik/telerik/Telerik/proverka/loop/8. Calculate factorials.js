let input = ['5', '-4'] ;

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let x = Number(gets());

let s = 1;
let f = 1;

for (let i = 1; i <= n; i++) {
    f *= i;
    s += f / (x ** i);
}

print(s.toFixed(5));
