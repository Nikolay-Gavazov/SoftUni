function solution() {
    const library = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    const storedElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    function manager(str) {
        let [comand, action, quantity] = str.split(' ');
        quantity = Number(quantity);

        if (comand == 'prepare') {
            const recipe = library[action];
            for (const el in recipe) {
                if (recipe[el] * quantity > storedElements[el]) {
                    return `Error: not enough ${el} in stock`;
                }
            }
            for (const el in recipe) {
                storedElements[el] -= recipe[el] * quantity;
            }
            return 'Success';
        } else if (comand == 'restock') {
            storedElements[action] += quantity;
            return 'Success';
        } else if (comand == 'report') {
            const result = [];
            for (const el in storedElements) {
                result.push(`${el}=${storedElements[el]}`)
            }
            return result.join(' ');
        }
    }
    return manager;
}
let manager = solution ();

console.log (manager ("restock flavour 50")); // Success

console.log (manager ("prepare lemonade 4"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock protein 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock carbohydrate 10"));
