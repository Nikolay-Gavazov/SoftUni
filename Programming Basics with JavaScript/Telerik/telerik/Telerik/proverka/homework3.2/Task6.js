let input = [
    '2',

];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let inputData = gets();
var newString = "";
let inputNumber = Number(inputData);
   
if(inputNumber > 0 || inputNumber < 0){
    print(inputNumber + 1);
} else if(inputData !== 'true' || inputData !== 'false'){
    for (var i = inputData.length - 1; i >= 0; i--) { 
    newString += inputData[i]; 
    }
    print(newString);
}
