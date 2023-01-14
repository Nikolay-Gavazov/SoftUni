// Input.
let input = [
    'K'
    
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let sign = gets();

switch (sign){
case '2':
case '3':
case '4':
case '5':
case '6':
case '7':
case '8':
case '9':
case '10':
case 'J':
case 'Q':
case 'K':
case 'A':
    print('yes');
    break;
default: print('no');        
}

        