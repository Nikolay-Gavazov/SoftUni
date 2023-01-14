function evenPowers(input){
    let n = Number(input[0]);

    let sum = 1;

    for (let i = 0; i <= n; i+= 2){
        console.log(sum);
        sum *= 2 * 2;
    }

}evenPowers(["7"])