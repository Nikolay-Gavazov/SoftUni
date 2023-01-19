function lowestPricesInCities(arr) {

    const obj = [];
    
    arr.forEach(el => {
        let [town, product, price] = el.split(' | ');
        if(!obj[product]) {
        obj[product] = {}
        obj[product][town] = Number(price);
        }  
        console.log(town, product, price);
    });

    

}
lowestPricesInCities(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10'])