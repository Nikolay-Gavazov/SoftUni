function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let value = Number(input[2]);

    if (product === 'coffee'){
        if (city === 'Sofia'){
            console.log(value * 0.5);
        }else if (city === 'Plovdiv'){
            console.log(value * 0.4);
        }else if (city === 'Varna'){
            console.log(value * 0.45);
        }
    }
    if (product === 'water'){
        if (city === 'Sofia'){
            console.log(value * 0.8);
        }else if (city === 'Plovdiv'){
            console.log(value * 0.7);
        }else if (city === 'Varna'){
            console.log(value * 0.7);
        }
    }
    if (product === 'beer'){
        if (city === 'Sofia'){
            console.log(value * 1.2);
        }else if (city === 'Plovdiv'){
            console.log(value * 1.15);
        }else if (city === 'Varna'){
            console.log(value * 1.1);
        }
    }
    if (product === 'sweets'){
        if (city === 'Sofia'){
            console.log(value * 1.45);
        }else if (city === 'Plovdiv'){
            console.log(value * 1.3);
        }else if (city === 'Varna'){
            console.log(value * 1.35);
        }
    }
    if (product === 'peanuts'){
        if (city === 'Sofia'){
            console.log(value * 1.6);
        }else if (city === 'Plovdiv'){
            console.log(value * 1.5);
        }else if (city === 'Varna'){
            console.log(value * 1.55);
        }
    }
}
smallShop(["water", "Plovdiv", "2"])