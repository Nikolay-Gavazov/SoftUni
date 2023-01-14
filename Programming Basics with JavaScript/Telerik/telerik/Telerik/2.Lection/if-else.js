let number = 7;

let isDividableBy3 = number % 3 === 0;
let isDividableBy5 = number % 5 === 0;
let isDividableBy3and5 = isDividableBy3 && isDividableBy5;

if (isDividableBy3and5) {
    console.log('FizzBuzz');
} else if (isDividableBy5) {
    console.log('Buzz');
} else if (isDividableBy3) {
    console.log('Fizz');
}