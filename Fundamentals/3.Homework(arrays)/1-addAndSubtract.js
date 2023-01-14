function addAndSubtract(array) {

    let sumOfArray = 0;
    let sumOfNewArray = 0;
    let length = array.length
    let newArray = [];

    for (let i = 0; i < length; i++) {
        let even = array[i] + i;
        let odd = array[i] - i;
        sumOfArray += array[i];
        if (array[i] % 2 === 0) {
            newArray[i] = even;
        } else {
            newArray[i] = odd
        }
        sumOfNewArray += newArray[i];
    }
    console.log(newArray);
    console.log(sumOfArray);
    console.log(sumOfNewArray);


}
addAndSubtract([5, 15, 23, 56, 35])