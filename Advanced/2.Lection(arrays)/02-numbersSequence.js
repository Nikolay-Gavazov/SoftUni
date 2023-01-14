function numbersSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let j = 1; j <= k; j++) {
            let currentNum = result[i - j];
            if (currentNum) {
                sum += currentNum;
            }
        }
        result.push(sum);
    }
    return result;
}
numbersSequence(8, 2)