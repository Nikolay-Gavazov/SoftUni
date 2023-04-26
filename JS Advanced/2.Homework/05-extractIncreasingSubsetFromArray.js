function extractIncreasingSubsetFromArray(array) {
    let biggest = array.shift();
    let result = [biggest];

    array.forEach(el => {
        if (el >= biggest) {
            result.push(el);
            biggest = el;
        }
    });
    
    return result;
}
console.log(extractIncreasingSubsetFromArray([1,3,8,4,10, 12, 3, 2, 24]));