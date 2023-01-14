let input = ['19,30,22,33,21', 
'John,Peter,Kate,Jane,Nick '];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const age = gets().split(',').map(Number);
const person = gets().split(',');

let youngestPerson = 0;
let oldestPerson = 0;

for (i = 0; i < age.lenght; i++){
const currentYoungestPerson = age[youngestPerson];
const currentOldestPerson = age[oldestPerson];
const currentPersonAge = age[i];

if (currentPersonAge > currentOldestPerson){
    oldestPerson = i;
}
if (currentPersonAge < currentYoungestPerson){
    youngestPerson = i;
}


} 

console.log(`Youngest person name: ${person[youngestPerson]}`);
console.log(`Oldest person name: ${person[oldestPerson]}`);

