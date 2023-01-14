function evenAndOddSubtraction(input){

    let evenSum = 0;
    let oddSum = 0;
    let currentNum = 0;

    for(let i = 0; i < input.length; i++){
        currentNum = Number(input[i]);
        if(currentNum % 2 === 0){
            evenSum += currentNum;
        }else{
            oddSum += currentNum;
        }
    }
    let result = evenSum - oddSum;

    console.log(result);

}
evenAndOddSubtraction([1,2,3,4,5,6])