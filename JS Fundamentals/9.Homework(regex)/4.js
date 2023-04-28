function barIncome(input) {

    const pattern = /%(?<name>[A-Z][a-z]+)%[^0-9|$%.]*<(?<product>\w+)>[^0-9|$%.]*\|(?<quantity>\d+)\|[^0-9|$%.]*(?<price>\d+[\.]*\d+)\$/gm;
    let comand = input.shift();
    let totalMoney = 0;


    while (comand != 'end of shift') {
        let line = pattern.exec(comand)
        if (line) {
            const name = line.groups['name'];
            const product = line.groups['product'];
            const quantity = line.groups['quantity'];
            const price = line.groups['price'];
            let currentMoney = Number(quantity) * Number(price);
            totalMoney += currentMoney;
            console.log(`${name}: ${product} - ${currentMoney.toFixed(2)}`);

            comand = input.shift();
            line = pattern.exec(comand)
        } else {
            comand = input.shift();

        }
    }
    console.log(`Total income: ${totalMoney.toFixed(2)}`);
}
barIncome(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift'])