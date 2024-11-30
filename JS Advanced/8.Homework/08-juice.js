function solve(arr) {
  const juices = {};
  const bottles = {};
  arr.forEach((el) => {
    let [juice, quantity] = el.split(" => ");
    quantity = Number(quantity);
    if (!juices.hasOwnProperty(juice)) {
      juices[juice] = {
        quantity: 0,
        bottles: 0,
      };
    }
    juices[juice].quantity += quantity;
    while (juices[juice].quantity >= 1000) {
      juices[juice].quantity -= 1000;
      juices[juice].bottles++;
      bottles[juice] = juices[juice].bottles;
    }
  });
  for (let el in bottles) {
    console.log(`${el} => ${bottles[el]}`);
  }
}
solve([
  "Kiwi => 234",

  "Pear => 2345",

  "Watermelon => 3456",

  "Kiwi => 4567",

  "Pear => 5678",

  "Watermelon => 6789",
]);
