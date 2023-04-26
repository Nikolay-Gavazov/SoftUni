function hotelRoom(input) {
    let mount = input[0];
    let nights = Number(input[1]);

    let priceStudio = 0;
    let priceApartment = 0;

    switch (mount) {
        case 'May':
        case 'October':
            priceStudio = nights * 50;
            priceApartment = nights * 65;
            if (nights > 7 && nights <= 14) {
                priceStudio = priceStudio * 0.95;
            } else if (nights > 14) {
                priceStudio = priceStudio * 0.7;
                priceApartment = priceApartment * 0.9;
            }
            break;
        case 'June':
        case 'September':
            priceStudio = nights * 75.2;
            priceApartment = nights * 68.7;
            if (nights > 14) {
                priceStudio = priceStudio * 0.8;
                priceApartment = priceApartment * 0.9;
            }
            break;
        case 'July':
        case 'August':
            priceStudio = nights * 76;
            priceApartment = nights * 77;
            if (nights > 14) {
                priceApartment = priceApartment * 0.9;
            }
            break;
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}
hotelRoom(["May","8"])