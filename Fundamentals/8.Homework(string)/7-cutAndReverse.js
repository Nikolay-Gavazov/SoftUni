function cutAndReverse(text) {

    let index = text.length / 2;

    let firstHalf = text.substring(0, index)
        .split('')
        .reverse()
        .join('');
    let secondHalf = text.substring(index)
        .split('')
        .reverse()
        .join('');

    console.log(firstHalf);
    console.log(secondHalf);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')