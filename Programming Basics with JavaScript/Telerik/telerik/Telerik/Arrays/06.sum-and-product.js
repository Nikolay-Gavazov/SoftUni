let numbers = [1, 2 -4, 3, 7, 0];

let sum = 0;
let product = 1;

for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
  product = product * numbers[i];
}

console.log(`Sum = ${sum}`);
console.log(`Product = ${product}`);
