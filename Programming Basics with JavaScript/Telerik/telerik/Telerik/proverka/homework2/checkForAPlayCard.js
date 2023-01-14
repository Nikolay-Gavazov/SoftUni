let input = [
    '1'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let string = String(gets()); 


if(string > 0 && string <= 10)
{
   console.log("Valid card sign? - Yes")
}
else if(string  === "K" || string === "Q" || string === "A" || string === "J")
{
    console.log("Valid card sign? - Yes!");
}
else 
{
    console.log("Valid card sign? - No")
}
