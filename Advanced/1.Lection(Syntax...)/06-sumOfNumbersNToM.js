function sumOfNumbersNToM(num1, num2){

    let result = 0;
    let n = Number(num1);
    let m = Number(num2);
    
    for(let i = n; i <= m; i++){
        result +=i
    }

    return result;

}
sumOfNumbersNToM(-8, 20)