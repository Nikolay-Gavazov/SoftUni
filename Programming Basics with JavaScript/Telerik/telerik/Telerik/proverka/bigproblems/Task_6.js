let numbers = [1, 2, 3,7, 3, 2, 1];
let numbersReverset = numbers.slice(0);
numbersReverset.reverse();

let result = true;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== numbersReverset[i]) {
        result = false; break;
    }
}
console.log(result ? 'Yes' : 'No');
