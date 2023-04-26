function diagonalSums(array) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    let length = array.length;
    let count = 1;
    for (let i = 0; i < length; i++) {

        mainDiagonal += array[i][i];
        secondaryDiagonal += array[i][length - count];
        count++;
    }
    console.log(mainDiagonal, secondaryDiagonal);

}
diagonalSums([[20, 40],[10, 60]])
diagonalSums([[3, 5, 17],[-1, 7, 14], [1, -8, 89]])