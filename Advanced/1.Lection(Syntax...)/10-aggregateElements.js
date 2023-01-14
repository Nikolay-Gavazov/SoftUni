function aggregateElements(array) {

    let sum = array.reduce((a, b) => a + b);
    let inverse = 0;

    for (let i = 0; i < array.length; i++) {
        inverse += 1 / array[i];
    }
    console.log(sum);
    console.log(inverse);
    console.log(array.join(''));

}
aggregateElements([1, 2, 3])