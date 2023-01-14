function oddAndEvenSum(number){

    let numberAsString = number.toString();
    let length = numberAsString.length;
    let evenSum = 0;
    let oddSum = 0;

    for(let i = 0; i < length; i++){
        let currentNumber = Number(numberAsString[i]);

        if(currentNumber % 2 === 0){
            evenSum += currentNumber;
        }else{
            oddSum += currentNumber;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435)