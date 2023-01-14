function sumFirstLast(array) {

    const firstNum = Number(array.shift());
    const lastNum = Number(array.pop());
    let result = firstNum + lastNum;

    return result;

}
sumFirstLast(['20', '30', '40'])