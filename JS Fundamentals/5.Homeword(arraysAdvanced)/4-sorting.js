function sorting(array){

    let sortedArray = array.sort((a, b) => a - b);
    let result = [];

    while(array.length > 0){
        let bigestNum = array.pop();
        let smallestNum = array.shift();

        result.push(bigestNum);
        result.push(smallestNum);
        
    }

    console.log(result.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])