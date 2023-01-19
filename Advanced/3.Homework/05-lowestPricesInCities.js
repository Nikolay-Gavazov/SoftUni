function lowestPricesInCities(arr) {

    const obj = [];

    arr.forEach(el => {
        let [town, product, price] = el.split(' | ');
        if (!obj[product]) {
            obj[product] = {};
        }
        obj[product][town] = Number(price);
    });

    let result = [];
    for (let key in obj) {
        let sorted = Object.entries(obj[key]).sort((a, b) => a[1] - b[1]);
        let [town, price] = sorted[0];
        console.log(`${key} -> ${price} (${town})`);
    }

}
lowestPricesInCities(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 9001',

    'New York | Burger | 10'])