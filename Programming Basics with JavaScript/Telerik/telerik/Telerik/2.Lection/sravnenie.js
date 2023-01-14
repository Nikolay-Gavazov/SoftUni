const number1 = 'hello';
const number2 = 'goodbye';
const number3 = 5;
const number4 = 5;
//const kogato iskame chislata da sa konstanta
// operator za sravnenie === (dali sa ravni)
// operator za sravnenie !== (dali ne sa ravni)
// operatorite rabotqt za vsichki tipove danni.
const areEqual = number1 === number2;
const areNumbersEqual = number3 === number4;

console.log(areEqual);
console.log(areNumbersEqual);

let x = 10;
let y = 20;

console.log((x + x) <= y);
// && operator 'i'
// || operator 'ili'

let name = 'Niki';
let age = 29;
let address = 'Mladost3'

const areYouNiki = (name === 'Niki' || age === 20) && address === 'Mladost4';

console.log(areYouNiki);