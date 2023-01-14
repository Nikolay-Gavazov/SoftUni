function negativePositiveNumbers(array) {

    let result = [];

    array.forEach(el => {
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    });

    console.log(result.join('\n'));
}
negativePositiveNumbers([7, -2, 8, 9])