let n = 4

let matrix = '';
for (let i = 1; i <= n; i++) { 
    for (let j = i; j<n+i; j++) { 
        matrix += j + ' ';
    }
    matrix += '\n';
}
console.log(matrix);
