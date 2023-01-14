function greatestCommonDivisor(num1, num2) {
    let greatestDivisor = 0;
    const smaller = Math.min(num1, num2);
    const bigger = Math.max(num1, num2);

    const difference = bigger - smaller;
    const iterator = Math.min(difference, smaller);

    for (let i = 0; i <= iterator; i++) {
        let currentDivisor = 0;
        if (difference % i == 0 && smaller % i == 0) {
            currentDivisor = i;
        }
        if (currentDivisor > greatestDivisor) {
            greatestDivisor = currentDivisor;
        }
    }

    console.log(greatestDivisor);

}
greatestCommonDivisor(2154, 458)