function biggerHalf(array){

    let result = [];
    array.sort((a, b) => a - b);
    const length = Math.ceil(array.length / 2);
    for(let i = 0; i < length; i++){
        let currentNum = Number(array.pop());
        result.unshift(currentNum);
    }
    return result;
}
biggerHalf([3, 19, 14, 7, 2, 19, 6])
