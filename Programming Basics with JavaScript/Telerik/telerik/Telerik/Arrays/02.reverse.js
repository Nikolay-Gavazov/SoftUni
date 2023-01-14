let numbers = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = 0; i < numbers.length; i++) {
  reversed[i] = numbers[numbers.length - i - 1];
}

console.log(reversed);
