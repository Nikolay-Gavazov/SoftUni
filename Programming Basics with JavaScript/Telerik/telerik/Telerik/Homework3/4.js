let N = 3;
let n = [2, 5, 1];
let output = '';

// 2<5>1

for (let i = 0; i < N; i++) {

    if(i>0) {
        if(n[i-1] < n[i]) {
            output += '<';
        }
        else if(n[i-1] === n[i]) {
            output += '=';
        }
        else if(n[i-1] > n[i]) {
            output += '>';
        }

    }
    output += n[i]
}
console.log(output);