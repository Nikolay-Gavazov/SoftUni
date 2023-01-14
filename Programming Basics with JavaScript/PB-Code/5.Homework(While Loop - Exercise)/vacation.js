function vacation(input) {
    let index = 0;
    let moneyNeed = Number(input[index]);
    index++;

    let moneyHave = Number(input[index]);
    index++;

    let action = input[index];
    index++;

    let currentMoney = Number(input[index]);
    index++;

    let spend = 0;
    let days = 0;
    while (moneyHave < moneyNeed) {
        days++;
        switch(action){
            case 'spend':
                moneyHave -= currentMoney;
                spend++;
                break;
            case 'save':
                spend = 0;
                moneyHave += currentMoney;
                break;
        }
        if(moneyHave < 0){
            moneyHave = 0;
        }
        if(spend === 5){
            break;
        }
        if(moneyHave >= moneyNeed){
            break;   
        }
        action = input[index];
        index++;

        currentMoney = Number(input[index]);
        index++;
    }
    if(spend === 5){
        console.log("You can't save the money.");
        console.log(days);
    }else{
        console.log(`You saved the money for ${days} days.`);
    }
}
vacation(["250",

"150",

"spend",

"50",

"spend",

"50",

"save",

"100",

"save",

"100"])