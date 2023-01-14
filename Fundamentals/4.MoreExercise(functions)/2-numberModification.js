function numberModification(number){

    let sum = 0;
    let numberAsArray = number.toString().split('');

    while(sum / numberAsArray.length <= 5){
        for(let i = 0; i < numberAsArray.length; i++){
            sum += Number(numberAsArray[i]);
        }
        if(sum / numberAsArray.length <= 5){
            numberAsArray.push('9');
            sum = 0;
        }
    }

    console.log(numberAsArray.join(''));

}
numberModification(101)