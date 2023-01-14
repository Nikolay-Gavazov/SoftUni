function numbers(input) {

    let numbers = input.split(' ').map(Number);
    let avgNum = 0;
    let length = numbers.length;
    let greaterThanAvg = [];

    for (let number of numbers) {
        avgNum += number;
    }
    avgNum /= length;

    for (let i = 0; i < length; i++) {
        if (numbers[i] > avgNum) {
            greaterThanAvg.unshift(numbers[i]);
        }
    }

    if (greaterThanAvg.length == 0) {
        console.log('No');
    } else if (greaterThanAvg.length < 6) {
        greaterThanAvg.sort((a, b) => b - a);
        console.log(greaterThanAvg.join(' '));
    } else {
        greaterThanAvg.sort((a, b) => b - a);
        let result = greaterThanAvg.splice(0, 5)
        console.log(result.join(' '));
    }

}
numbers('10 10 10')