let input = [
    '3',  
    '4'
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstNumber = Number(gets()); 
let secondNumber = Number(gets());

if(firstNumber > secondNumber)
{
    let greater = Math.max(firstNumber, secondNumber);
    let smallest = Math.min(firstNumber, secondNumber);
    console.log(`${smallest} , ${greater}`);
}
 