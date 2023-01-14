function magicMatrices(array) {

    let firstArray = [];
    firstArray.push(array[0]);
    firstArray = firstArray[0];
    let secondArray = [];
    secondArray.push(array[1]);
    secondArray = secondArray[0];
    let thirdArray = [];
    thirdArray.push(array[2]);
    thirdArray = thirdArray[0];
    let length = array.length;
    let firstRow = 0;
    let secondRow = 0;
    let thirdRow = 0;
    let firstColumn = Number(firstArray[0]) + Number(secondArray[0]) + Number(thirdArray[0]);
    let secondColumn = Number(firstArray[1]) + Number(secondArray[1]) + Number(thirdArray[1]);
    let thirdColumn = Number(firstArray[2]) + Number(secondArray[2]) + Number(thirdArray[2]);
   
    let isMagic = false;

    for (let i = 0; i < length; i++) {
        firstRow += Number(firstArray[i]);
        secondRow += Number(secondArray[i]);
        thirdRow += Number(thirdArray[i]);

    }

    if (firstRow == secondRow && secondRow == thirdRow && firstRow == thirdRow) {
       if(firstColumn == secondColumn && secondColumn == thirdColumn && firstColumn == thirdColumn){
        if(firstRow == firstColumn){
            isMagic = true;
        }
       }
    }

    console.log(isMagic);
}
magicMatrices([[40, 50, 60],[60, 50, 40],[50, 50, 50]])