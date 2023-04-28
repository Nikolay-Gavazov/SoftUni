function rotateArray(array){
    let rotations = Number(array[array.length - 1]);
    array.pop();
    for(let i = 0; i < rotations; i++){
        let numberToMove = array[array.length - 1];
        array.pop();
        array.unshift(numberToMove);
    }
    console.log(array.join(' '));
}
rotateArray(['Banana', 'Orange', 'Coconut',

'Apple', '15'])