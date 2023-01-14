function equalNeighbors(array) {
    let count = 0;
    for (let i = 1; i < array.length; i++) {
        let prevArr = array[i - 1];
        let currentArr = array[i];
        for (let j = 0; j < prevArr.length; j++) {
            if (prevArr[j] == currentArr[j]) {
                count++;
            }
        }
    }
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            if (array[i][j] == array[i][j + 1]) {
                count++;
            }
        }
    }
    return count;
}
equalNeighbors([['2', '2', '5', '7', '4'],

['4', '0', '5', '3', '4'],

['2', '5', '5', '4', '2']])