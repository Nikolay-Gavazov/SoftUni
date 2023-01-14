let input = [
    '5',  
    '2',
    '3'
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstNumber = Number(gets()); 
let secondNumber = Number(gets());
let thirdNumber = Number(gets());


    let theBiggest = Math.max(firstNumber, secondNumber, thirdNumber);
    console.log(`${theBiggest}`);

 