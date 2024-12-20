class OnlineShop {
  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
    this.products = [];
    this.sales = [];
  }

  loadingStore(product, quantity, spaceRequired) {
    if (spaceRequired > this.warehouseSpace) {
      throw Error("Not enough space in the warehouse.");
    }
    this.products.push({ product, quantity });
    this.warehouseSpace -= spaceRequired;
    return `The ${product} has been successfully delivered in the warehouse.`;
  }

  quantityCheck(product, minimalQuantity) {
    for (const el of this.products) {
      if (el.product == product) {
        if (minimalQuantity <= 0) {
          throw Error("The quantity cannot be zero or negative.");
        } else {
          if (el.quantity >= minimalQuantity) {
            return `You have enough from product ${product}.`;
          } else {
            const difference = minimalQuantity - el.quantity;
            el.quantity = minimalQuantity;

            return `You added ${difference} more from the ${product} products.`;
          }
        }
      }
    }
    throw Error(`There is no ${product} in the warehouse.`);
  }

  sellProduct(product) {
    for (const el of this.products) {
      if (el.product == product) {
        el.quantity--;
        this.sales.push({ product, quantity: 1 });
        return `The ${product} has been successfully sold.`;
      }
    }
    throw Error(`There is no ${product} in the warehouse.`);
  }

  revision() {
    if (!this.sales.length) {
      throw Error("There are no sales today!");
    }

    let result = [];
    result.push(`You sold ${this.sales.length} products today!`);
    result.push("Products in the warehouse:");
    for (const el of this.products) {
      result.push(`${el.product}-${el.quantity} more left`);
    }

    return result.join("\n");
  }
}

const myOnlineShop = new OnlineShop(500);
console.log(myOnlineShop.loadingStore("headphones", 10, 200));
console.log(myOnlineShop.loadingStore("laptop", 5, 200));

console.log(myOnlineShop.quantityCheck("headphones", 10));
console.log(myOnlineShop.quantityCheck("laptop", 10));

console.log(myOnlineShop.sellProduct("headphones"));
console.log(myOnlineShop.sellProduct("laptop"));
console.log(myOnlineShop.revision());
