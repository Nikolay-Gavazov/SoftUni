function travelTime(input) {

    let destinations = {};

    input.forEach(el => {
        let [country, town, price] = el.split(' > ');

        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = {};
        }
        if (!destinations[country].hasOwnProperty(town)) {
            destinations[country][town] = price;
        }
        let oldPrice = destinations[country][town]

        if (oldPrice > price) {
            destinations[country][town] = price;
        }


    });

    let sortedCountries = [...Object.keys(destinations)].sort((a, b) => a.localeCompare(b))
    let result = '';
    sortedCountries.forEach(country => {
        result += country + ' -> ';
        let sortedPrice = [...Object.keys(destinations[country])].sort((a, b) => travelCost(a, b, destinations, country))
        sortedPrice.forEach(el => {
            result += `${el} -> ${destinations[country][el]} `
        });
        result += '\n'
        
    });
    console.log(result);
    
    function travelCost(town1, town2, destination, country) {
        let firstPrice = destination[country][town1];
        let secondPrice = destination[country][town2];

        return firstPrice - secondPrice;
    }
}
travelTime([

    'Bulgaria > Sofia > 25000',
    
    'Bulgaria > Sofia > 25000',
    
    'Kalimdor > Orgrimar > 25000',
    
    'Albania > Tirana > 25000',
    
    'Bulgaria > Varna > 25010',
    
    'Bulgaria > Lukovit > 10'
    
    ])