let input = [
    '0'
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let score = Number(gets()); 

if( score >= 1 && score <= 3)
{
    let score1 = score * 10;
    console.log(`Result: ${score1} `);
}
else if(score >= 4 && score <= 6)
{
    let score2 = score * 100;
    console.log(`Result: ${score2}`);
}
else if(score >= 7 && score <= 9)
{
    let score3 = score * 1000;
    console.log(`Result: ${score3}`);
}
else 
{
    console.log("Invalid score")
}