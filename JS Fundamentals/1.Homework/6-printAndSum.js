function printAndSum (firstNum, lastNum){

    let sum = 0;
    let result = '';

    for(let i = firstNum; i <= lastNum; i++){
        result += i + ' ';
        sum += i;
    }

    console.log(result);
    console.log(`Sum: ${sum}`);

}
printAndSum(0, 26)