let str = 'TA'
let number = Number(str);

if (number){
    console.log(number + 1);
}  else if(str){
    let reverseStr = '';
    for(let i = str.length-1; i>= 0; i--)
    {
        reverseStr += str[i];
    }
    console.log(reverseStr);
}

