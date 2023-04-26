function depositCalculator(input) {
    let depositAmount = Number(input[0]);
    let timeOfDeposit = Number(input[1]);
    let lichva = Number(input[2]);
    let natrupanaLichva = depositAmount * (lichva / 100);
    let mountLichva = natrupanaLichva / 12;
    let totalBenefit = depositAmount + timeOfDeposit * mountLichva;
    console.log(totalBenefit);
}
depositCalculator(["2350",

"6 ",

"7 "])