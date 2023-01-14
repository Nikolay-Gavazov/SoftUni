let currentTimes = 0;
let numberOfTimes = 5;

for (let currentTimes = 0; currentTimes < numberOfTimes;  currentTimes++) {
    console.log(currentTimes);
}


for (let i = 1; i < 10; i++) {
    console.log(i);
}

for (let i = 2; i <= 10; i+= 2) {
    console.log(i);
}

for (let i = 1; i < 10; i+= i) {
    console.log(i);
}

for (let i = 1; i < 6; i++) 
    if (i % 2 !== 0) {
        continue;
    }
    
