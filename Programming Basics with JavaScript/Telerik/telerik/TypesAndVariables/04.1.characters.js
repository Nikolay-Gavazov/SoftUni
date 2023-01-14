let divider = '-';

let line = divider.repeat(20);

// getting a character at a specific position. NB! The first position is at index 0

let abc = 'abc';

let a = abc.charAt(0); 
let b = abc.charAt(1);
let c = abc.charAt(2);

console.log(a);
console.log(b);
console.log(c);

console.log(line);

// https://www.asciitable.com/
// The ASCII table represents each symbol in the computer
// It matches a number to a character nd could do it both ways
// 40 -> (
// 112 -> p

let code = abc.charCodeAt(1);
console.log(code); // b -> 98

let char = String.fromCharCode(98); 
console.log(char) // 98 -> b



