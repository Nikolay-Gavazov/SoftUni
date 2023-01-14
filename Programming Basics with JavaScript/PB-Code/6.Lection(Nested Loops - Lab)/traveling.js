function traveling(input) {
    let index = 0;
    let comand = input[index];
    index++;

    let destination = '';
    let moneyNeed = 0;
    let currentMoney = 0;

    while (comand !== 'End') {
        destination = comand;
        
        comand = input[index];
        index++;

        moneyNeed = Number(comand);

        comand = input[index];
        index++;

        while (Number) {
            currentMoney += Number(comand);
            comand = input[index];
            index++;
            if(currentMoney >= moneyNeed){
                console.log(`Going to ${destination}!`);
                currentMoney = 0;
                break;
            }
        }

    }
}traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"])