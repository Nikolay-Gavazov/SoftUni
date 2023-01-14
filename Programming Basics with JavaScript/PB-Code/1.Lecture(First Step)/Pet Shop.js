function petShop(input) {
    let dogFood = Number(input[0]) * 2.5;
    let catFood = Number(input[1]) * 4;
    let sum = dogFood + catFood
    console.log(`${sum} lv.`);
}
petShop(["13", "9"])