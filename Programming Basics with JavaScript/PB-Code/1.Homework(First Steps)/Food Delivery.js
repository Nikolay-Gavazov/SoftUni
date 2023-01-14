function foodDelivery(input) {
    
    let chickenMenu = Number(input[0]) * 10.35;
    let fishMenu = Number(input[1]) * 12.40;
    let vegetarianMenu = Number(input[2]) * 8.15;
    let priceForOrderMenus = chickenMenu + fishMenu + vegetarianMenu
    let desert = (priceForOrderMenus) * 20 / 100;
    let delivery = 2.5;
    
    let priceOfOrder = priceForOrderMenus + desert + delivery ;

    console.log(priceOfOrder);
}
foodDelivery(["9 ",

"2 ",

"6 "])