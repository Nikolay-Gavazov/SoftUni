function magicMatrices(arr) {
    let isMagic = true;
    let length = arr.length;
    let row = 0;
    let col = 0;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            row += arr[i][j];
            col += arr[0][i]
        }
    }

    if (row != col) {
        isMagic = false;
    }

    console.log(isMagic);

}
magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]])