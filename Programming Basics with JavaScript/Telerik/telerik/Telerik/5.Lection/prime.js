let N = 10;
let output = '';
for (maybePrime = 1; maybePrime <= N; maybePrime++) {
    let isPrime = true;
    for (let divider = 2; divider < maybePrime; divider++) {
        if (maybePrime % divider === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        output += '1';
        console.log(output);
    } else {
        output += '0'
    }

}
