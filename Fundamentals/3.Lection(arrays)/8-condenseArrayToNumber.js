function condenseArrayToNumber(numbers) {
    let condensed = [];
    
    while(numbers.length > 1){
        let condensed = [];
        for(let i = 0; i < numbers.length - 1; i++){
            condensed[i] = Number(numbers[i]) + Number(numbers[i+1]);
        }
        numbers = condensed;
        condensed = 0;

    }
    
    console.log(numbers[0]);

}
condenseArrayToNumber([5, 0, 4, 1, 2])