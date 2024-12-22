class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (
      model == "" ||
      horsepower < 0 ||
      !Number.isInteger(horsepower) ||
      price < 0 ||
      mileage < 0
    ) {
      throw new Error("Invalid input!");
    }
    this.availableCars.push({ model, horsepower, price, mileage });
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    const index = this.availableCars.findIndex((x) => x.model == model);
    const matchModel = this.availableCars[index];
    if (!matchModel) {
      throw new Error(`${model} was not found!`);
    }
    const diff = matchModel.mileage - desiredMileage;

    if (diff <= 0) {
    } else if (diff <= 40000) {
      matchModel.price *= 0.95;
    } else {
      matchModel.price *= 0.9;
    }
    const soldCar = {
      model: matchModel.model,
      horsepower: matchModel.horsepower,
      soldPrice: matchModel.price,
    };
    this.soldCars.push(soldCar);
    this.availableCars.splice(index, 1);
    this.totalIncome += matchModel.price;
    return `${model} was sold for ${matchModel.price.toFixed(2)}$`;
  }

  currentCar() {
    if (this.availableCars.length == 0) {
      return `There are no available cars`;
    }
    const result = this.availableCars.map(
      (x) =>
        `---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(
          2
        )} km - ${x.price.toFixed(2)}$`
    );
    result.unshift(`-Available cars:`);
    return result.join("\n");
  }

  salesReport(criteria) {
    if (criteria == "horsepower") {
      this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
    } else if (criteria == "model") {
      this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
    } else {
      throw new Error("Invalid criteria!");
    }

    const result = this.soldCars.map(
      (x) => `---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`
    );
    result.unshift(`-${this.soldCars.length} cars sold:`);
    result.unshift(
      `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`
    );
    return result.join("\n");
  }
}

let dealership = new CarDealership("SoftAuto");

dealership.addCar("Toyota Corolla", 100, 3500, 190000);

dealership.addCar("Mercedes C63", 300, 29000, 187000);

dealership.addCar("Audi A3", 120, 4900, 240000);

console.log(dealership.sellCar("Toyota Corolla", 230000));

console.log(dealership.sellCar("Mercedes C63", 110000));
