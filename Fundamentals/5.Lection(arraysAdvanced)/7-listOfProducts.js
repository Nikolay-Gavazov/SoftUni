function listOfProducts(products){

    let sorted = products.sort();
    let length = sorted.length;

    for(let i = 0; i < length; i++){
        console.log(`${i+1}.${sorted[i]}`);
    }

}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions',

'Apples'])