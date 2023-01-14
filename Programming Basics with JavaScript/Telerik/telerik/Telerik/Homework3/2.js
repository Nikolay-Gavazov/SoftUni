let n = 10;

let output = '';
for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 7 === 0 ){
        continue;
    }
output = output + ' ' + i;
}

console.log(output);