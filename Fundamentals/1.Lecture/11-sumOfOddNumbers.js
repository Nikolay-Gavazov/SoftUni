function sumOfOddNumbers(num){

    let result = 1;
    let sum = 0;

    for(let i = 1; i<=num; i++){
        console.log(result);
        sum += result;
        result +=2;
        
    }

    console.log(`Sum: ${sum}`);

}
sumOfOddNumbers(3)