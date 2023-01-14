let n = 6;

let output = '';
let output2 = '';
for (let i = 1; i <= n; i++) {
  
    
output = output + ' ' + i;
}
for (let i = n-1; i <= n; i--) {
    if (i === 0){
        break;
    }
    output2 = output2 + ' ' + i;
}
console.log(output + output2);