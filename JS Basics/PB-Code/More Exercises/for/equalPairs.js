function equalPairs(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;

    let isdiff = false;
    let prevSum = 0;
    let maxDiff = 0;
    let sum = 0;

    for(let i = 0; i < n; i++){
        let firstNum = Number(input[index]);
        index++;

        let secondNum = Number(input[index]);
        index++;

        sum = firstNum + secondNum;

        if(sum !== prevSum && i !== 0){
            isdiff = true;
            let diff = Math.abs(sum - prevSum);
            if(diff > maxDiff){
                maxDiff = diff;
            }
        }
        prevSum = sum;
    }
    if(isdiff){
        console.log(`No, maxdiff=${maxDiff}`);
    }else{
        console.log(`Yes, value=${sum}`);
    }
}
equalPairs([4,
    1,
    1,
    3,
    1,
    2,
    2,
    0,
    0
    
    ])