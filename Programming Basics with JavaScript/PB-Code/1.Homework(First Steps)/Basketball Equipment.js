function basketballEquipment(input) {
    let priceForTraining = Number(input[0]);
    let shoes = priceForTraining - (priceForTraining * 0.4);
    let sportsEquipment = shoes - (shoes * 0.2);
    let ball = sportsEquipment * 0.25;
    let accessories = ball * 0.2
    let totalPrice = priceForTraining + shoes + sportsEquipment + ball + accessories;

    console.log(totalPrice);
}
basketballEquipment(["550 "])