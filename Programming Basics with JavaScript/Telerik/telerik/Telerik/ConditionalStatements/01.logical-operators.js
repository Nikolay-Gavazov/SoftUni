let a = 6;
let b = 7;

console.log(a >= b); // false
console.log(a !== b); // true

let x = a > b; // false
let y = b > a; // true

// true if both x and y are true, else false
console.log(x && y); // false;

// true if at least one of x and y is true, else false
console.log(x || y);

// negation, true if x is false, false if x is true
console.log(!x);

// unlike other languages JavaScript doesn't have the XOR operator (true if only of the x and y is true, else false)
// we can use an expression to achieve that
console.log((x && !y) || (!x && y));