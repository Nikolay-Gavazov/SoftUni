function biggestElement(array) {
    let biggest = Number.MIN_SAFE_INTEGER;

    array.forEach(el => {
        let firstBig = Math.max(...el);
        if (firstBig > biggest) {
            biggest = firstBig;
        }
    })
    return biggest
}
biggestElement([[20, 50, 10],

    [8, 33, 145]])