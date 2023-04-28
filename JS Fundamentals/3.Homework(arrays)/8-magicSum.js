function magicSum(array, sum){

    let result = [];
    let length = array.length;
    for(let i = 0; i < length; i++){
        for(let j = i+1; j < length; j++){
        if (array[i] + array[j] === sum){
            result.push(array[i]);
            result.push(array[j]);
            console.log(result.join(' '));
            result = [];
        }
    }
    }

}
magicSum([14, 20, 60, 13, 7, 19, 8],27)