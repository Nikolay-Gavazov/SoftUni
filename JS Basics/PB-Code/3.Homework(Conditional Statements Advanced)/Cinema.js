function cinema(input) {

    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let income = 0;

    switch(type) {
        case 'Premiere':
            income = rows * columns * 12;
            console.log(`${income.toFixed(2)} leva`);
            break;
        case 'Normal':
            income = rows * columns * 7.5;
            console.log(`${income.toFixed(2)} leva`);
            break;
        case 'Discount':
            income = rows * columns * 5;
            console.log(`${income.toFixed(2)} leva`);
            break;
    }
}
cinema(["Discount", "12", "30"])