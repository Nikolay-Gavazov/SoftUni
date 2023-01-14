let arrayFirst = [1, 2, 3];
let arraySizeFirst = arrayFirst.length;

let arraySecond = [1, 2, 3];
let arraySizeSecond = arraySecond.length;
let result = true;
if (arraySizeFirst === arraySizeSecond) {
    for (let i = 0; i < arraySizeFirst; i++) {
        if (arrayFirst[i] !== arraySecond[i]) {
            result = false; break;
        }

    }
    if (result) {
        console.log('Equal');
    } else {
        console.log('Not equal')
    }
} else {
    console.log('Not equal');
}



