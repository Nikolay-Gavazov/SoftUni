let input = [
    '4',
    '1',
    '6',
    '8',
    '4'

];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let numbersCount = Number(gets());
let inputNumber1 = 0;
var newString = "";
for(let i=0;i<numbersCount;i++){
let inputData = gets();


let inputNumber = Number(inputData);

if(inputNumber > 0 || inputNumber < 0){
    inputNumber1 += inputNumber;
   continue;
} else if(inputData !== 'true' || inputData !== 'false'){
     
    newString = newString + inputData+"-";
    
    continue;  
} 
}
print(newString);
print(inputNumber1);
