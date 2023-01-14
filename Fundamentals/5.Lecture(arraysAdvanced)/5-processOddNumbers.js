function processOddNumbers(array){

    let result = array
    .filter((num, i) => i % 2 !== 0)
    .reverse()
    .map(x => x * 2);

    console.log(result.join(' '));
}
processOddNumbers([3, 0, 10, 4, 7, 3])