let age = 19;

let olderThan12 = age > 12;
let youngerThan20 = age < 20;
let isRetired = age > 65;

let isTeen = olderThan12 && youngerThan20;
let isNotInWorkingAge = isTeen || isRetired || age < 13;

console.log(`The person who is ${age} years old is a teenager: ${isTeen}`);
console.log(`This person should not work: ${isNotInWorkingAge}`);