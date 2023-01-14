let input = [
    '2', 
    '-3',
    '-8'
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstNumber = Number(gets()); 
let secondNumber = Number(gets());
let thirdNumber = Number(gets());

if(firstNumber > 0 && secondNumber > 0 && thirdNumber > 0)
{
    console.log("+");
}
else if(firstNumber < 0 || secondNumber < 0 || thirdNumber < 0)
{
    console.log("-");
}
else if(firstNumber === 0 || secondNumber === 0 || thirdNumber === 0)
{
    console.log("0");
}
