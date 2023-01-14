let input = ['19,30,22,33,21', 
'John,Peter,Kate,Jane,Nick '];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const age = gets().split(',').map(Number);
const person = gets().split(',');

let youngestAge = Math.min(...age);
let oldestAge = Math.max(...age);

let youngestPerson = person[youngestAge];



console.log(youngestPerson);
