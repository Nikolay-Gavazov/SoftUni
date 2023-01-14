function uniquePinCodes(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let thirdNum = Number(input[2]);

    let a = '';
    let b = '';
    let c = '';
    let res = ''
    for(let i = 2; i <= firstNum; i++){
        if(i % 2 !== 0){
            continue;
        }
        for(let j = 2; j <= secondNum; j++){
            for(let h = 2; h <= thirdNum; h++){
                if(i % 2 === 0){
                    a = i;
                }
                if(j == 2 || j == 3 || j == 5 || j == 7){
                b = j;
            }

            if(h % 2 === 0 && b == j){
                c = h;
                res = `${a} ${b} ${c}`
                console.log(res);
                continue;
                }
                
            }   
        }   
    }
    
}
uniquePinCodes([3,
    5,
    5
    ])