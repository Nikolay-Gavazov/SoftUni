function sameNumbers(input) {

    const num = input.toString();
    const fistDigit = num[0];
    let isSame = true;
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
        if (fistDigit != num[i]) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}
sameNumbers(22232222)