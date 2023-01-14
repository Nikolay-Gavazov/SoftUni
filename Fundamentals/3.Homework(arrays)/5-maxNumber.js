function maxNumber(array){

    let resultArray = [];
    let length = array.length;

    for(let i = 0; i <= length; i++){
        let isBigger = true;
        for(let j = i+1; j < length; j++){
            if(array[i] <= array[j]){
                isBigger = false
            }
        }
        if(isBigger){
            resultArray.push(array[i]);
        }
    }

    console.log(resultArray.join(' '));
}
maxNumber([1, 4, 3, 2])