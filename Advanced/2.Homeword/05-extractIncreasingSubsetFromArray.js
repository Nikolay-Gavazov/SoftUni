function extractIncreasingSubsetFromArray(array) {
    let biggest = array.shift();
    let result = [];
    result.push(biggest);

    array.forEach(el => {
        let currentNum = el;
        if (currentNum >= biggest) {
            result.push(currentNum);
            biggest = currentNum;
        }
    });

    return result;
}
extractIncreasingSubsetFromArray([1,3,8,4,10, 12, 3, 2, 24])