function sumOfNumbers(input){
    let numbers = input[0];
let sum = 0;

for (let i = 0; i < numbers.length; i++){
    sum += Number(numbers[i]);
}
console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["512534"])