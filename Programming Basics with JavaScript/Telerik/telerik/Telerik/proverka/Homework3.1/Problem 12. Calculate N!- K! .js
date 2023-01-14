let input = [ 6, 5];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let k = +gets();
    
for (let i = n - 1; i > 0; i--)
{
    n *= i;
}
    
    for (let i = k - 1; i > 0; i--)
    {
        k *= i;
    }
    
    n /= k;    
print(n);
