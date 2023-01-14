function firstAndLastKNumbers(array){

    let k = Number(array.shift())
    let length = array.length;
    let firstK = array.slice(0, k);
    let secondK = array.slice(length - k, )

    console.log(firstK.join(' '));
    console.log(secondK.join(' '));
}
firstAndLastKNumbers([2,

    7, 8, 9])