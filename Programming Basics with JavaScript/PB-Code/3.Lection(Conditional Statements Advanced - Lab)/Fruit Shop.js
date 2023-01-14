function fruitShop(input){
    let product = input[0];
    let day = input[1];
    let value = Number(input[2]);

    switch(day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            if (product === 'banana'){
                let output = value * 2.5;
                console.log(output.toFixed(2));

            }else if(product === 'apple'){
                let output = value * 1.2;
                console.log(output.toFixed(2));
            }else if(product === 'orange'){
                let output = value * 0.85;
                console.log(output.toFixed(2));
            }else if(product === 'grapefruit'){
                let output = value * 1.45;
                console.log(output.toFixed(2));
            }else if(product === 'kiwi') {
                let output = value * 2.7;
                console.log(output.toFixed(2));
            }else if(product === 'pineapple'){
                let output = value * 5.5;
                console.log(output.toFixed(2));
            }else if(product === 'grapes'){
                let output = value * 3.85;
                console.log(output.toFixed(2));
            }else {
                console.log('error');
            }
            break;
        case 'Saturday':
        case 'Sunday':
            if (product === 'banana'){
                let output = value * 2.7;
                console.log(output.toFixed(2));

            }else if(product === 'apple'){
                let output = value * 1.25;
                console.log(output.toFixed(2));
            }else if(product === 'orange'){
                let output = value * 0.9;
                console.log(output.toFixed(2));
            }else if(product === 'grapefruit'){
                let output = value * 1.6;
                console.log(output.toFixed(2));
            }else if(product === 'kiwi') {
                let output = value * 3;
                console.log(output.toFixed(2));
            }else if(product === 'pineapple'){
                let output = value * 5.6;
                console.log(output.toFixed(2));
            }else if(product === 'grapes'){
                let output = value * 4.2;
                console.log(output.toFixed(2));
            }else {
                console.log('error');
            }
            break;
        default:
            console.log('error');

    }

}
fruitShop(["tomato", "Monday", "0.5"])