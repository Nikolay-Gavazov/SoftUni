const numbers = [22, 35, 43, 36, 87];

let sum = 0;
for (let i = 0; i <= numbers.length; i++){
    const element = +numbers[i];
    if(element % 2 ===1){
        sum+= element;
    }
}
console.log(sum);
