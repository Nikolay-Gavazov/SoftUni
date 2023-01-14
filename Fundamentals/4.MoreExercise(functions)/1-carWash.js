function carWash(array) {

    let cleanValue = 0;
    let comand = '';
    let length = array.length;

    for (let i = 0; i < length; i++) {
        comand = array[i];
        switch (comand) {
            case 'soap':
                cleanValue += 10;
                break;
            case 'water':
                cleanValue *= 1.2;
                break;
            case 'vacuum cleaner':
                cleanValue *= 1.25;
                break;
            case 'mud':
                cleanValue *= 0.9;
                break;
        }
    }

    console.log(`The car is ${cleanValue.toFixed(2)}% clean.`);


}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap',

    'water'])