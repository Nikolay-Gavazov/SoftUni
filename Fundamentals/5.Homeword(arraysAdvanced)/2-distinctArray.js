function distinctArray(array){

    let length = array.length;
    let result = [];

    for(let i = 0; i < length; i++){
        if(!result.includes(array[i])){
            result.push(array[i]);
        }
    }

    console.log(result.join(' '));

}
distinctArray([20, 8, 12, 13, 4,

    4, 8, 5])