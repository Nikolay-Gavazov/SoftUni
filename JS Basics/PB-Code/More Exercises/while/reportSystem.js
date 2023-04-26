function reportSystem(input) {
    let index = 0;
    let moneyNeed = Number(input[index]);
    index++

    let comand = input[index];
    index++;

    let cash = 0;
    let cc = 0;
    let cashMoney = 0;
    let ccMoney = 0;
    let totalMoney = 0;

    while (comand !== 'End') {
        if (index % 2 === 0) {
            if (Number(comand) <= 100) {
                cash++;
                cashMoney += Number(comand);
                totalMoney += Number(comand);
                console.log('Product sold!');
            } else {
                console.log('Error in transaction!');
            }
        } else {
            if (Number(comand) >= 10) {
                cc++;
                ccMoney += Number(comand);
                totalMoney += Number(comand);
                console.log('Product sold!');
            } else {
                console.log('Error in transaction!');
            }
        }

        if (totalMoney >= moneyNeed) {
            break;
        }
        comand = input[index];
        index++;
    }
    let avgCash = cashMoney / cash;
    let avgCc = ccMoney / cc;

    if (comand === 'End') {
        console.log('Failed to collect required money for charity.');
    } else {
        console.log(`Average CS: ${avgCash.toFixed(2)}`);
        console.log(`Average CC: ${avgCc.toFixed(2)}`);
    }


}
reportSystem([600,
86,
150,
98,
227,
'End'

])