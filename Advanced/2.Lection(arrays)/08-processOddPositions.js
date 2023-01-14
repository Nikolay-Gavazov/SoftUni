function processOddPositions(array) {

    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 != 0) {
            result.push(array[i] * 2);
        }
    }
    return result.reverse().join(' ');
}
processOddPositions([3, 0, 10, 4, 7, 3])