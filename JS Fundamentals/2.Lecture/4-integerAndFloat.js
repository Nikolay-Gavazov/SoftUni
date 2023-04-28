function integerAndFloat(a , b , c){
    let sum = a + b + c;

    let floor = Math.floor(sum);

    if(sum === floor){
        console.log(`${sum} - Integer`);
    }else{
        console.log(`${sum} - Float`);
    }

}
integerAndFloat(9, 100, 11)