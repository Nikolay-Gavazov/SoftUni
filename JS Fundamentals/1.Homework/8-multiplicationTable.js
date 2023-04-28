function multiplicationTable(num) {

    let product = 0;

    for (let i = 1; i <= 10; i++) {
        product = num * i;
        console.log(`${num} X ${i} = ${product}`);
    }

}
multiplicationTable(5)