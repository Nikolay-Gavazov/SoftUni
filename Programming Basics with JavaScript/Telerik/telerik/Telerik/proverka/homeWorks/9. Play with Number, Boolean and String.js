// Input.
let input = [
    'string!',
    'true',
    '5'
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution


let string = gets();
let booleanReverser =   gets() === 'true' ? true : false; //въведи във инпута 'true'  или 'false за да го обърне в аутпута 
let numberIncreaser = +gets();

//от тук си избирате дали да е булева-обръщачка, стринг+* или число+1, като след равното напишете една от горните три опции:
let userChoice = booleanReverser;


switch(true){
    case ( typeof userChoice === 'string'):
        print(userChoice = userChoice += '*');
        break;
    case ( typeof userChoice === 'boolean'):
        print( userChoice = !userChoice);
        break;
    case ( typeof userChoice === 'number'):    
        print(userChoice+1);
}
 

