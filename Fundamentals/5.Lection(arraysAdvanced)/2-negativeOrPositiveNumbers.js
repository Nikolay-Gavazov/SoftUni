function negativeOrPositiveNumbers(array){

    let length = array.length;
    let result = [];
    for(let i = 0; i < length; i++){
        if(array[i] < 0){
            result.unshift(array[i]);
        }else{
            result.push(array[i]);
        }
    }

    for(let i = 0; i < length; i++){
        console.log(result[i]);
    }

}
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])