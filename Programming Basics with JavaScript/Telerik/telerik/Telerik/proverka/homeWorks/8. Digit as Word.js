// Input.
let input = [
    '5',
    

];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let numb = +gets();

switch (numb){
    case 0:
         print('zero');
         break;
    case 1: 
         print('one');
         break;
    case 2:
         print('two');
         break;
    case 3:
         print('three');
         break;
    case 4:
         print('four');
         break;        
    case 5:
         print('five');
         break;
    case 6:
         print('six');
         break;
    case 7:
         print('seven');
         break;
    case 8:
         print('eight');
         break;
    case 9:
         print('nine');
         break;      
    default: 
         print('not a digit');                        

}

