let input = [
    '3',
    '5',
    '2',
    '1',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
 
let numbersCount = Number(gets());

let sum = 0;
let max = -Infinity;
let min = Infinity;

for(i=0;i<numbersCount;i++){
    var nextNumber = Number(gets());
    sum += nextNumber;
    
    if (nextNumber >= max) {
        max = nextNumber;
    }  
    if(nextNumber<=min){
        min = nextNumber;
    }
}
print(`min= ${min}`);
print(`max= ${max}`);
print(`sum= ${sum}`);

let average = sum / numbersCount;
print(`avg= ${average.toFixed(2)}`);
