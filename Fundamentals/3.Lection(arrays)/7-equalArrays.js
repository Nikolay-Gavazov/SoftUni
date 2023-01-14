function equalArrays(arr1, arr2){
    let areEqual = true;
    let sum = 0;
    let currentNum = 0;
    for(let i = 0; i < arr2.length; i++){
        if(arr1[i] === arr2[i]){
            currentNum = Number(arr1[i]);
            sum += currentNum;
        }else{
            areEqual = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }
    if(areEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}
equalArrays(['1','2','3','4','5'],

['1','2','4','4','5'])