let age = 21;

let olderThan12 = age > 12;
let youngerThan20 = age < 20;
let isRetired = age > 65;

let isTeen = olderThan12 && youngerThan20;
let isNotInWorkingAge = isTeen || isRetired || age < 13;

if (age === 23) {console.log('Age is 23');}

if (age < 23) {console.log('Younger than 23');}

if (age > 23) {console.log('Older 23');}
