let str = 'Telerik Academy';

str[0] = 'A';  // This will not update the string.

let newStr = str.substring(0, 2);

console.log(str);
console.log(newStr); // Substring from 0 to 2nd element (excluding)
