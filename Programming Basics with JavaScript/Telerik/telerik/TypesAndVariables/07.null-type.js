let name;
let address = null;
let workplace = 'Telerik Academy';

console.log(name === address); // not the same. undefined and null are different things

// undefined is a variable not defined
// null is a missing value (not exactly but let's say it is)
console.log(workplace);

workplace = null;
console.log(workplace);
