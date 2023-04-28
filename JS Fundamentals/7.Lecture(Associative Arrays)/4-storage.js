function storage(input) {

    let storage = new Map();

    input.forEach(el => {
        let [product, value] = el.split(' ');

        if (!storage.has(product)) {
            storage.set(product, value);
        } else {
            let oldValue = storage.get(product);
            let newValue = Number(oldValue) + Number(value);
            storage.set(product, newValue);
        }
    });

    for (let [product, value] of storage) {
        console.log(`${product} -> ${value}`);
    }

}
storage(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'])