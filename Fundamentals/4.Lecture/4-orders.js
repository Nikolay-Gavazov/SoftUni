function orders(product, quantity){

    let result = 0;

    switch(product){
        case 'coffee':
            result = 1.5 * quantity;
            console.log(result.toFixed(2));
        break;
        case 'water':
            console.log(quantity.toFixed(2));
        break;
        case 'coke':
            result = 1.4 * quantity;
            console.log(result.toFixed(2));
        break;
        case 'snacks':
            result = 2 * quantity;
            console.log(result.toFixed(2));
    }

}
orders("water", 4)