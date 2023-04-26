function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = '';
    let type = '';
    let sum = 0;

    if (budget <= 100) {
        destination = 'Bulgaria';
        switch (season) {
            case 'summer':
                type = 'Camp';
                sum = budget * 0.3;
                break;
            case 'winter':
                type = 'Hotel';
                sum = budget * 0.7;
                break;
        }
    } else if (budget <= 1000 && budget > 100) {
        destination = 'Balkans';
        switch (season) {
            case 'summer':
                type = 'Camp';
                sum = budget * 0.4;
                break;
            case 'winter':
                type = 'Hotel';
                sum = budget * 0.8;
                break;
        }
    } else {
        destination = 'Europe';
        type = 'Hotel';
        sum = budget * 0.9;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${sum.toFixed(2)}`);
}
journey(["1500", "summer"])