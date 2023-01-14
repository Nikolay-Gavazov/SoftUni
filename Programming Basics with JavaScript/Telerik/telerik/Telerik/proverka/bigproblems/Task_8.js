let numbers = [7, 2, -2, 1, -5, 4, 5, -3, 1];
let negative = [];
let positive = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positive.push(numbers[i]);
    } else {
        negative.push(numbers[i]);
    }
}
console.log(negative.concat(positive));