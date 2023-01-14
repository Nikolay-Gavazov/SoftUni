function printNthElement(array){

    let n = Number(array[array.length-1]);
    array.splice(array.length - 1);
    let result = [array[0]];
    let length = array.length;

    for(let i = n; i < length; i+=n){
        result.push(array[i]);
        
    }

    console.log(result.join(' '));

}
printNthElement(['dsa', 'asd', 'test', 'test', '2'])