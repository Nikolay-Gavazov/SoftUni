let input = [
    3,
    5,
    2,
    1
]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = gets();
let max = 0;
let min = 1;
sum = 0;
for ( i=1; i<=n; i++) 
{
    let num = +gets();
    sum += num;

    if ((num<=0) && (num<=min))
    {
        min=num;
        continue;
    }
    if (num <= min)
    {
        min=num;
    }else if (num >= max)
    {
        max=num;
    }
}
print(`min=${min}`);
print(`max=${max}`);
print(`sum=${sum}`);
print(`avg=${(sum/n).toFixed(2)}`);