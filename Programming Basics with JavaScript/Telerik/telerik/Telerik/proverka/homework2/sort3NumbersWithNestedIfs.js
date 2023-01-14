let input = [
    '8',  
    '6',
    '7'
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = Number(gets()); 
let b = Number(gets());
let c = Number(gets());

if((a > b) && (a > c))
{
    if(b > c)
    {
        console.log(a, b, c);
    }
    else
    {
        console.log(a, c, b);
    }
              
}
else if(((b > a) && (b > c)))
{
    if(a > c)
    {
        console.log(b, a, c);
    }
    else 
    {
        console.log( b, c, a);
    }
}
else if(((c > a) && (c > b)))
{
    if(a > b)
    {
        console.log( c, a, b);
    }
    else
    {
        console.log(c, b, a);
    }
}