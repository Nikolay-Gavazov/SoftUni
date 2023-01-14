// Input.
let input = [
    '97',

];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution
//тази задача ми взе здравето и стана дългичка, но работи :)

let number = gets();

let ones;
let one2;
let teens;
let tens2
let tens;

let i = number.length - 1;
let iTens = number.length - 2;
let iTeens = number.length - 1;
if (number.length === 3){
    i = number.length - 3;
    iTens = number.length - 3;
    switch (true){
        case number[2] === '1': 
             one2 = 'one';
             break;
        case number[2] === '2':
             one2  = 'two';
             break;
        case number[2] === '3':
            one2 = 'three';
             break;
        case number[2] === '4':
            one2 = 'four';
             break;        
        case number[2] === '5':
            one2 = 'five';
             break;
        case number[2] === '6':
            one2 = 'six';
             break;
        case number[2] === '7':
            one2 = 'seven';
             break;
        case number[2] === '8':
            one2 = 'eight';
             break;
        case number[2] === '9':
            one2 = 'nine';
             break;  
    }

    switch(true){
        case (number[1] === '2' && number.length >= 2):
            tens2  = 'twenty';
            break;
        case (number[1] === '3' && number.length >= 2):
            tens2 = 'thirty';
            break
        case (number[1] === '4' && number.length >= 2):
            tens2 = 'forty';
            break;
        case (number[1] === '5' && number.length >= 2):
            tens2 = 'fifty';
            break;
        case (number[1] === '6' && number.length >= 2):
            tens2 = 'sixty';
            break;
        case (number[1] === '7' && number.length >= 2):
            tens2 = 'seventy';
            break;
        case (number[1] === '8' && number.length >= 2):
            tens2 = 'eighty';
            break;        
        case (number[1] === '9' && number.length >= 2):
            tens2 = 'ninety';
            break        
    
    }    
    switch(true){
        case (number[1] === '1' && number.length >= 2 && number[2] === '0'):
            teens2 = 'Ten';
            break;
        case (number[1] === '1' && number.length >= 2 && number[2] === '1'):
            teens2 = 'Eleven';
            break
        case (number[1] === '1' && number.length >= 2 && number[2] === '2'):
            teens2 = 'Twelve';
            break;
        case (number[1] === '1' && number.length >= 2 && number[2] === '3'):
            teens2 = 'Thirteen';
            break;
        case (number[1] === '1' && number.length >= 2 && number[2] === '4'):
            teens2 = 'Fourteen';
            break;
        case (number[1] === '1' && number.length >= 2 && number[2] === '5'):
            teens2 = 'Fifteen';
            break;
        case (number[1] === '1' && number.length >= 2 && number[2] === '6'):
            teens2 = 'Sixteen';
            break;        
        case (number[1] === '1' && number.length >= 2 && number[2] === '7'):
            teens2 = 'Seventeen';
            break
        case (number[1] === '1' && number.length >= 2 && number[2] === '8'):
            teens2 = 'Eighteen';
            break;
        case (number[1] === '1' && number.length >= 2 && number[2] === '9'):
            teens2 = 'Nineteen';
            break; 

}
}

switch (true){
    case number[i] === '0':
         ones = 'Zero';
         break;
    case number[i] === '1': 
         ones = 'One';
         break;
    case number[i] === '2':
         ones  = 'Two';
         break;
    case number[i] === '3':
         ones = 'Three';
         break;
    case number[i] === '4':
         ones = 'Four';
         break;        
    case number[i] === '5':
         ones = 'Five';
         break;
    case number[i] === '6':
         ones = 'Six';
         break;
    case number[i] === '7':
         ones = 'Seven';
         break;
    case number[i] === '8':
         ones = 'Eight';
         break;
    case number[i] === '9':
         ones = 'Nine';
         break;                                 
}
switch(true){
    case (number[iTens] === '2' && number.length >= 2):
        tens  = 'Twenty';
        break;
    case (number[iTens] === '3' && number.length >= 2):
        tens = 'Thirty';
        break
    case (number[iTens] === '4' && number.length >= 2):
        tens = 'Forty';
        break;
    case (number[iTens] === '5' && number.length >= 2):
        tens = 'Fifty';
        break;
    case (number[iTens] === '6' && number.length >= 2):
        tens = 'Sixty';
        break;
    case (number[iTens] === '7' && number.length >= 2):
        tens = 'Seventy';
        break;
    case (number[iTens] === '8' && number.length >= 2):
        tens = 'Eighty';
        break;        
    case (number[iTens] === '9' && number.length >= 2):
        tens = 'Ninety';
        break        

}
switch(true){
    case (number[iTens] === '1' && number.length >= 2 && number[iTeens] === '0'):
        teens = 'Ten';
        break;
    case (number[iTens] === '1' && number.length >= 2 && number[iTeens] === '1'):
        teens = 'Eleven';
        break
    case (number[iTens] === '1' && number.length >= 2 && number[iTeens] === '2'):
        teens = 'Twelve';
        break;
    case (number[iTens] === '1' && number.length >= 2 && number[iTeens] === '3'):
        teens = 'Thirteen';
        break;
    case (number[iTens] === '1' && number.length >= 2 && number[iTeens] === '4'):
        teens = 'Fourteen';
        break;
    case (number[iTens] === '1' && number.length >= 2 && number[iTeens] === '5'):
        teens = 'Fifteen';
        break;
    case (number[iTens] === '1' && number.length >= 2 && number[iTeens] === '6'):
        teens = 'Sixteen';
        break;        
    case (number[iTens] === '1' && number.length >= 2 && number[iTeens] === '7'):
        teens = 'Seventeen';
        break
    case (number[iTens] === '1' && number.length >= 2 && number[iTeens] === '8'):
        teens = 'Eighteen';
        break;
    case (number[iTens] === '1' && number.length >= 2 && number[iTeens] === '9'):
        teens = 'Nineteen';
        break;        
        
}
if (number.length === 1 ){
    print(ones);
}
if (number.length === 2 && (number[0]!=='1') && (number[1] === '0')){
    print(tens);
}    
if(number[0] === '1' && number.length === 2){
    print(teens);  
}
if (number.length === 2 && (number[0]!=='1') && (number[1]!=='0') ){
    print(tens + ' ' + ones.toLocaleLowerCase());
}
if (number.length === 3 && number[1] === '0' && (number[2] ==='0') ){
        print(ones + ' hundred');
}else if(number.length === 3 && (number[1] === '0' ) && (number[2] !=='0')){
    print(ones + ' hundred' + ' and ' +  one2);
}else if (number.length === 3 && (number[1] !== '0' ) && (number[2] ==='0')){
    print(ones + ' hundred' + ' and ' + tens2);
}else if (number.length === 3 && (number[1] !== '0' ) && (number[1] !== '1' ) && (number[2] !=='0')){
    print(ones + ' hundred' + ' and ' + tens2 + ' ' + one2);
}
if(number.length === 3 && (number[1] === '1') ){
    print(ones + ' hundred' + ' and ' + teens2.toLocaleLowerCase());
}
