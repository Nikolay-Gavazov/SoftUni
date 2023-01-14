let input = [
    '5',  
    '2',
    '11',
    '4',
    '10'
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstNumber = Number(gets()); 
let secondNumber = Number(gets());
let thirdNumber = Number(gets());
let forthNumber = Number(gets());
let fifthNumber = Number(gets());


    let theBiggest = Math.max(firstNumber, secondNumber, thirdNumber, forthNumber, fifthNumber);
    console.log(`${theBiggest}`);