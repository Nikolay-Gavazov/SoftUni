function storeProvision(store, delivery) {

    let storeObj = {};

    for (let i = 0; i < store.length; i += 2) {
        let product = store[i];
        storeObj[product] = Number(store[i + 1]);;
    }

    for (let i = 0; i < delivery.length; i += 2) {
        let product = delivery[i];
        if (!storeObj.hasOwnProperty(product)) {
            storeObj[product] = 0;
        }
        storeObj[product] += Number(delivery[i + 1]);
    }

    for (let key in storeObj) {
        console.log(`${key} -> ${storeObj[key]}`);
    }

}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'])