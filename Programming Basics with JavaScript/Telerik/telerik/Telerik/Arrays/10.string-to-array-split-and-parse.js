let line = '1,2,3,4,5,6';
let numbers = line.split(',').map(Number);

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  console.log(`Increment with one: ${numbers[i] + 1}`);
}
