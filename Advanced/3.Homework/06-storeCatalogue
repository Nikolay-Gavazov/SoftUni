function storeCatalogue(arr) {

    let groupInitial = '';
    let obj = {};
    arr.sort((a, b) => a.localeCompare(b))
        .forEach(el => {
            let [product, price] = el.split(' : ');
            obj[product] = price;
        });

    for (let key in obj) {
        if (groupInitial != key[0]) {
            groupInitial = key[0];
            console.log(groupInitial);
        }
        console.log(`${key}: ${obj[key]}`);
    }
}
storeCatalogue(['Banana : 2', "Rubic's Cube : 5", 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rali Car : 2000000', 'Pesho : 0.000001', 'Barrel : 10'])
storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])