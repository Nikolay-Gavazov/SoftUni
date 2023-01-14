function sumEvenNumbers(array){

    let result = 0;
    let currentNum = 0;

    for(let i = 0; i < array.length; i++){
        currentNum = Number(array[i]);
        if(currentNum % 2 === 0){
            result += currentNum
        }
    }
    console.log(result);

}
sumEvenNumbers(['1','2','3','4','5','6'])