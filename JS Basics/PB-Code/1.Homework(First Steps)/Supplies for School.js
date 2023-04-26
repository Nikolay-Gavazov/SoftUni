function suppliesForSchool(input) {
    
    let packOfPans = Number(input[0]);
    let packOfMarkers = Number(input[1]);
    let detragent = Number(input[2]);
    let procentDiscount = Number(input[3]);

    let priceForPans = packOfPans * 5.8 ;
    let priceForMarkers = packOfMarkers * 7.2 ;
    let priceForDetragent = detragent * 1.2 ;
    let priceForAll = priceForPans + priceForMarkers + priceForDetragent ;
    let totalPrice = priceForAll - (priceForAll * (procentDiscount / 100));

    console.log(totalPrice);

}
suppliesForSchool(["4 ",

"2 ",

"5 ",

"13 "])