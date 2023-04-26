function cleverLily(input){
    let age = Number(input[0]);
    let washMashine = Number(input[1]);
    let priceForToy = Number(input[2]);

    let money = 0;
    let currentMoney = 10;
    let toys = 0;

    for(let i=1; i<=age; i++){
        if (i % 2 === 0){
            money += currentMoney;
            currentMoney += 10;
            money--;
        }else{
            toys++;
        }
    }
    let totalMoney = money + toys * priceForToy;
    if(washMashine <= totalMoney){
        let diff = totalMoney - washMashine;
        console.log(`Yes! ${diff.toFixed(2)}`);
    }else{
        diff = washMashine - totalMoney;
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
cleverLily(["21",

"1570.98",

"3"])