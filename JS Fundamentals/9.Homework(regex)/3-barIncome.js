function barIncome(input) {

    const pattern = /%(?<name>[A-Z][a-z]+)%[^0-9|$%.]*<(?<product>\w+)>[^0-9|$%.]*\|(?<quantity>\d+)\|[^0-9|$%.]*(?<price>\d+[\.]*\d+)\$/gm;
    let index = 0;
    let totalMoney = 0;


    while (input[index] != 'end of shift') {
        let line = pattern.exec(input[index])
        while (line !== null) {
            const name = line.groups['name'];
            const product = line.groups['product'];
            const quantity = line.groups['quantity'];
            const price = line.groups['price'];
            let currentMoney = Number(quantity) * Number(price);
            totalMoney += currentMoney;
            console.log(`${name}: ${product} - ${currentMoney.toFixed(2)}`);

            line = pattern.exec(input[index])
        }

        index++;
    }

    console.log(`Total income: ${totalMoney.toFixed(2)}`);
}
barIncome(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift'])