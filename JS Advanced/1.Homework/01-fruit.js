function fruit(fruit, grams, price) {
    let kg = grams / 1000;
    let totalPrice = kg * price;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80)