function sortingNumbers(array) {
    array.sort((a, b) => a - b);
    let result = [];
    while (array.length > 0) {
        let firstNum = array.shift();
        let secondNum = array.pop();
        result.push(firstNum)
        result.push(secondNum);
    }
    return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])