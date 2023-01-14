function triangleOfNumbers(num){

    let result = '';

    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= i; j++){
            result += i + ' ';
        }
        console.log(result);
        result = '';
    }

}
triangleOfNumbers(5)