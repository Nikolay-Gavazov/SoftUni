function solve(arr) {
  const cars = {};

  arr.forEach((el) => {
    let [brand, model, quantity] = el.split(" | ");
    quantity = Number(quantity);
    if (!cars.hasOwnProperty(brand)) {
      cars[brand] = {};
    }
    if (!cars[brand].hasOwnProperty(model)) {
      cars[brand][model] = { quantity };
    } else {
      cars[brand][model].quantity += quantity;
    }
  });
  for (let el in cars) {
    console.log(el);
    for (let car in cars[el]) {
      console.log(`###${car} -> ${cars[el][car].quantity}`);
    }
  }
}
solve([
  "Audi | Q7 | 1000",

  "Audi | Q6 | 100",

  "BMW | X5 | 1000",

  "BMW | X6 | 100",

  "Citroen | C4 | 123",

  "Volga | GAZ-24 | 1000000",

  "Lada | Niva | 1000000",

  "Lada | Jigula | 1000000",

  "Citroen | C4 | 22",

  "Citroen | C5 | 10",
]);
