function equalSumsEvenOddPosition(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let res = "";
    

    for(let i = firstNum; i <= secondNum; i++){
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;

        for(let j = 0; j <= currentNum.length; j++){
            let digit = Number(currentNum.charAt(j));
            if(j % 2 === 0){
                evenSum += digit;
            }else{
                oddSum += digit;
            }
        }
        if(oddSum === evenSum){
            res += currentNum + " ";
        }
    }
    console.log(res);
}