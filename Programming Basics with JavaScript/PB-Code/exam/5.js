function exam(input) {
    let index = 0;
    let purpose = Number(input[index]);
    index++;
    let comand = input[index];
    index++;
    let money = 0;

    while(comand !== 'closed'){
       if(comand === 'haircut'){
        comand = input[index];
        index++;
        switch(comand){
            case 'mens':
                money += 15; 
                break;
            case 'ladies':
                money += 20;
                break;
            case 'kids':
                money += 10;
                break;
        }
       }else if(comand === 'color'){
        comand = input[index];
        index++;
        switch(comand){
            case 'touch up':
                money += 20;
                break;
            case 'full color':
                money += 30;
                break;
        }
       }
       if(money >= purpose){
        break;
       }
       comand = input[index];
        index++;
    }

    if(money >= purpose){
        console.log('You have reached your target for the day!');
        console.log(`Earned money: ${money}lv.`);
    }else{
        let diff = purpose - money;
        console.log(`Target not reached! You need ${diff}lv. more.`);
        console.log(`Earned money: ${money}lv.`);
    }

}exam([300,
    'haircut',
    'ladies',
    'haircut',
    'kids',
    'color',
    'touch up',
    'closed'
    ])