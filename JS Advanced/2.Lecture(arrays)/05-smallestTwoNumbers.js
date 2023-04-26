function smallestTwoNumbers(array) {

    array.sort((a, b) => a - b);
    let firstNum = array.shift();
    let secondNum = array.shift();
    console.log(firstNum, secondNum);

}
smallestTwoNumbers([3, 0, 10, 4, 7, 3])