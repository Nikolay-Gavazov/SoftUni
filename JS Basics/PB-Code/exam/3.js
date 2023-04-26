function exam(input) {

    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let winMoney = dancers * points;

    switch(place){
        case 'Abroad':
            winMoney *= 1.5;
            switch(season){
                case 'summer':
                    winMoney *= 0.9;
                    break;
                case 'winter':
                    winMoney *= 0.85;
                    break;
            }
            break;
        case 'Bulgaria':
            switch(season){
                case 'summer':
                    winMoney *= 0.95;
                    break;
                case 'winter':
                    winMoney *= 0.92;
                    break;
            }
            break;

    }



    let charityMoney = winMoney * 0.75;
    let moneyPerDancer = (winMoney - charityMoney) / dancers;

console.log(`Charity - ${charityMoney.toFixed(2)}`);
console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);

}