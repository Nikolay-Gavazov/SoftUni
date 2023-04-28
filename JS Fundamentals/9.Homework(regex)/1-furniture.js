function furniture(input) {

    const pattern = /[>]{2}(?<furniture>[A-Za-z]+)[<]{2}(?<price>\d+[\.]*\d+)!(?<quantity>\d+)/g;
    let index = 0;
    let totalMoney = 0;

    console.log('Bought furniture:');
    while (input[index] !== 'Purchase') {
        let purchase = pattern.exec(input[index]);
        while (purchase !== null) {
            let furniture = purchase.groups['furniture'];
            console.log(furniture);
            const price = purchase.groups['price'];
            const quantity = purchase.groups['quantity'];
            totalMoney += price * quantity;

            purchase = pattern.exec(input[index]);
        }


        index++;

    }

    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3','>>TV<<300!5','>Invalid<<!5',
'Purchase'])