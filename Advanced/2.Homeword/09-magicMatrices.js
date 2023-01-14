function magicMatrices(arr) {
    let isMagic = true;
    let length = arr.length;

        for (let i = 0; i < length - 1; i++) {
            let currentRow = 0;
            let nextRow = 0;
            let currentCol = 0;
            let nextCol = 0;
            for (let j = 0; j < arr[i].length; j++) {
                currentRow += arr[i][j];
                nextRow += arr[i + 1][j];
                currentCol += arr[j][i]
                nextCol += arr[j][i + 1];
            }
            if (currentRow != nextRow) {
                isMagic = false;
                break;
            } else if (currentCol != nextCol) {
                isMagic = false;
                break;
            } else if (currentRow != currentCol) {
                isMagic = false;
                break;
            }
        }
    
    console.log(isMagic);

}
magicMatrices([[4, 5, 6],

    [6, 5, 4],
    
    [5, 5, 5]])