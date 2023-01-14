function spiceMustFlow(yield) {

    const expected = 100;
    const consume = 26;
    let startingYield = yield;
    let days = 0;
    let extract = 0;

    while (startingYield >= expected) {
        days++;
        extract += startingYield - consume;
        startingYield -= 10;
    }
    if(extract >= consume){
        extract -= consume;
    }

    console.log(days);
    console.log(extract);
}
spiceMustFlow(450)