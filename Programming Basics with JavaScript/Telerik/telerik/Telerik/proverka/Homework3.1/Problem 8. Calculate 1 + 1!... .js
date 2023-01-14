let input = [5,-4]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let x = +gets();
resultX= 1;
factorialN= 1;
s = 0;
for (i=1; i<=n; i++)
{
    factorialN *= i;
    resultX *= x;
    s += (factorialN / resultX)
}
let answer = (1+s).toFixed(5);
print(answer);