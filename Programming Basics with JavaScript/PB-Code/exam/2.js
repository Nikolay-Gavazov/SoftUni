function exam(input) {

    let pocketMoney = Number(input[0]) * 5;
    let moneyForDay = Number(input[1]) * 5;
    let expenses = Number(input[2]);
    let presentPrice = Number(input[3]);

    let allMoney = pocketMoney + moneyForDay;
    let totalMoney = allMoney - expenses

    if(totalMoney >= presentPrice){
        console.log(`Profit: ${totalMoney.toFixed(2)} BGN, the gift has been purchased.`);
    }else{
        let moneyNeed = presentPrice - totalMoney;
        console.log(`Insufficient money: ${moneyNeed.toFixed(2)} BGN.`);
    }


}